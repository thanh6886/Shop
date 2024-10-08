import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import purchaseApi from 'src/apis/purchase.api'
import Button from 'src/components/Button'
import QuantityController from 'src/components/QuantityController'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import { ExtendedPurchase, Purchase } from 'src/types/purchase.type'
import { generateNameId } from 'src/utils/utils'
import { produce } from 'immer'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'
import noproduct from 'src/assets/images/no-product.png'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from 'src/redux/store'
import { setExtendedPurchases } from 'src/redux/redux'
import { isEqual } from 'lodash'

export default function Cart() {
  const dispatch = useDispatch()
  const location = useLocation()
  const extendedPurchases = useSelector((state: IRootState) => state.redux.extendedPurchases)

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId
  const purchasesInCart = purchasesInCartData?.data.data
  const isAllChecked = useMemo(() => extendedPurchases.every((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchases = useMemo(() => extendedPurchases.filter((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchasesCount = checkedPurchases.length

  const updatePurchaseMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }) => purchaseApi.updatePurchase(body),
    onSuccess: () => {
      refetch()
    }
  })

  const buyProductsMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }[]) => purchaseApi.buyProducts(body),
    onSuccess: (data) => {
      refetch()
      toast.success(data.data.message, {
        autoClose: 1000
      })
    }
  })

  const deletePurchasesMutation = useMutation({
    mutationFn: (purchaseIds: string[]) => purchaseApi.deletePurchase(purchaseIds),
    onSuccess: () => {
      refetch()
    }
  })

  // tính tổng giá tiền
  const totalCheckedPurchasePrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [checkedPurchases]
  )
  const totalCheckedPurchaseSavingPrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + current.product.price_before_discount * current.buy_count
      }, 0),
    [checkedPurchases]
  )

  useEffect(() => {
    const extendedPurchasesObject = keyBy(extendedPurchases, '_id')
    const newExtendedPurchases =
      purchasesInCart?.map((purchase) => {
        const isChoosenPurchaseFromLocation = choosenPurchaseIdFromLocation === purchase._id
        return {
          ...purchase,
          disabled: false,
          checked: isChoosenPurchaseFromLocation || Boolean(extendedPurchasesObject[purchase._id]?.checked)
        }
      }) || []
    if (!isEqual(newExtendedPurchases, extendedPurchases)) {
      dispatch(setExtendedPurchases(newExtendedPurchases))
    }
  }, [purchasesInCart, choosenPurchaseIdFromLocation, extendedPurchases, dispatch])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  //check
  const handleCheck = (Index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedPurchases: ExtendedPurchase[] = produce(extendedPurchases, (draft) => {
      draft[Index].checked = event.target.checked
    })
    dispatch(setExtendedPurchases(updatedPurchases))
  }

  const handleCheckAll = () => {
    const updatedPurchases: ExtendedPurchase[] = extendedPurchases.map((purchase) => ({
      ...purchase,
      checked: !isAllChecked
    }))

    dispatch(setExtendedPurchases(updatedPurchases))
  }
  // input Quantity Control
  const handleTypeQuantity = (Index: number) => (value: number) => {
    let updatedPurchases: ExtendedPurchase[] = produce(extendedPurchases, (draft) => {
      draft[Index].buy_count = value
    })
    dispatch(setExtendedPurchases(updatedPurchases))
  }

  const handleQuantity = (Index: number, value: number, enable: boolean) => {
    if (enable) {
      const purchase = extendedPurchases[Index]
      let updatedPurchases: ExtendedPurchase[] = produce(extendedPurchases, (draft) => {
        draft[Index].disabled = true
      })
      dispatch(setExtendedPurchases(updatedPurchases))
      updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }
  //delete
  const handleDelete = (purchaseIndex: number) => () => {
    const purchaseId = extendedPurchases[purchaseIndex]._id
    deletePurchasesMutation.mutate([purchaseId])
  }

  const handleDeleteManyPurchases = () => {
    const purchasesIds = checkedPurchases.map((purchase) => purchase._id)
    deletePurchasesMutation.mutate(purchasesIds)
  }

  const handleBuyPurchases = () => {
    if (checkedPurchases.length > 0) {
      const body = checkedPurchases.map((purchase) => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      buyProductsMutation.mutate(body)
    }
  }

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        {extendedPurchases.length > 0 ? (
          <>
            <div className='overflow-auto'>
              <div className='min-w-[1000px]'>
                <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
                  <div className='col-span-6'>
                    <div className='flex items-center'>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input
                          type='checkbox'
                          className='h-5 w-5 accent-orange'
                          checked={isAllChecked}
                          onChange={handleCheckAll}
                        />
                      </div>
                      <div className='flex-grow text-black'>Sản phẩm</div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-5 text-center'>
                      <div className='col-span-2'>Đơn giá</div>
                      <div className='col-span-1'>Số lượng</div>
                      <div className='col-span-1'>Số tiền</div>
                      <div className='col-span-1'>Thao tác</div>
                    </div>
                  </div>
                </div>
                {extendedPurchases.length > 0 && (
                  <div className='my-3 rounded-sm bg-white p-5 shadow'>
                    {extendedPurchases.map((e, index) => (
                      <div
                        key={e._id}
                        className='mb-5 grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'
                      >
                        <div className='col-span-6'>
                          <div className='flex'>
                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                              <input
                                type='checkbox'
                                className='h-5 w-5 accent-orange'
                                checked={e.checked}
                                onChange={handleCheck(index)}
                              />
                            </div>
                            <div className='flex-grow'>
                              <div className='flex'>
                                <Link
                                  className='h-20 w-20 flex-shrink-0'
                                  to={`${path.home}${generateNameId({
                                    name: e.product.name,
                                    id: e.product._id
                                  })}`}
                                >
                                  <img alt={e.product.name} src={e.product.image} />
                                </Link>
                                <div className='flex-grow px-2 pt-1 pb-2'>
                                  <Link
                                    to={`${path.home}${generateNameId({
                                      name: e.product.name,
                                      id: e.product._id
                                    })}`}
                                    className='text-left line-clamp-2'
                                  >
                                    {e.product.name}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6'>
                          <div className='grid grid-cols-5 items-center'>
                            <div className='col-span-2'>
                              <div className='flex items-center justify-center'>
                                <span className='text-gray-300 line-through'>
                                  ₫{new Intl.NumberFormat().format(e.product.price_before_discount)}
                                </span>
                                <span className='ml-3'>₫{new Intl.NumberFormat().format(e.product.price)}</span>
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <QuantityController
                                max={e.product.quantity}
                                value={e.buy_count}
                                classNameWrapper='flex items-center'
                                onIncrease={(value) => handleQuantity(index, value, value <= e.product.quantity)}
                                onDecrease={(value) => handleQuantity(index, value, value >= 1)}
                                onType={handleTypeQuantity(index)}
                                onFocusOut={(value) =>
                                  handleQuantity(
                                    index,
                                    value,
                                    value >= 1 &&
                                      value <= e.product.quantity &&
                                      value !== (purchasesInCart as Purchase[])[index].buy_count
                                  )
                                }
                                disabled={e.disabled}
                              />
                            </div>
                            <div className='col-span-1'>
                              <span className='text-orange'>
                                ₫{new Intl.NumberFormat().format(e.product.price * e.buy_count)}
                              </span>
                            </div>
                            <div className='col-span-1'>
                              <button
                                onClick={handleDelete(index)}
                                className='bg-none text-black transition-colors hover:text-orange'
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center'>
              <div className='flex items-center'>
                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                  <input
                    type='checkbox'
                    className='h-5 w-5 accent-orange'
                    checked={isAllChecked}
                    onChange={handleCheckAll}
                  />
                </div>
                <button className='mx-3 border-none bg-none' onClick={handleCheckAll}>
                  Chọn tất cả ({extendedPurchases.length})
                </button>
                <button className='mx-3 border-none bg-none' onClick={handleDeleteManyPurchases}>
                  Xóa
                </button>
              </div>

              <div className='mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
                <div>
                  <div className='flex items-center sm:justify-end'>
                    <div>Tổng thanh toán ({checkedPurchasesCount} sản phẩm):</div>
                    <div className='ml-2 text-2xl text-orange'>
                      ₫{new Intl.NumberFormat().format(totalCheckedPurchasePrice)}
                    </div>
                  </div>
                  <div className='flex items-center text-sm sm:justify-end'>
                    <div className='text-gray-500'>Tiết kiệm</div>
                    <div className='ml-6 text-orange'>
                      ₫{new Intl.NumberFormat().format(totalCheckedPurchaseSavingPrice - totalCheckedPurchasePrice)}
                    </div>
                  </div>
                </div>
                <Button
                  className='mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'
                  onClick={handleBuyPurchases}
                  disabled={buyProductsMutation.isLoading}
                >
                  Mua hàng
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className='text-center'>
            <img src={noproduct} alt='no purchase' className='mx-auto h-24 w-24' />
            <div className='mt-5 font-bold text-gray-400'>Giỏ hàng của bạn còn trống</div>
            <div className='mt-5 text-center'>
              <Link
                to={path.home}
                className=' rounded-sm bg-orange px-10 py-2  uppercase text-white transition-all hover:bg-orange/80'
              >
                Mua ngay
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
