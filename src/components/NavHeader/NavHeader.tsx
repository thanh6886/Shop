import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import authApi from 'src/apis/auth.api'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import { getAvatarUrl } from 'src/utils/utils'
import Popover from '../Popover'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from 'src/redux/store'
import { setIsAuthenticated, setProfile } from 'src/redux/redux'

export default function NavHeader() {
  const dispatch = useDispatch()

  const queryClient = useQueryClient()

  const { isAuthenticated, profile, extendedPurchases } = useSelector((state: IRootState) => ({
    isAuthenticated: state.redux.isAuthenticated,
    profile: state.redux.profile,
    extendedPurchases: state.redux.extendedPurchases
  }))

  const logoutAccountMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      dispatch(setIsAuthenticated(false))
      dispatch(setProfile(null))
      queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
      toast.success('đăng xuất thành công', { autoClose: 1000 })
    }
  })

  const handleLogout = () => {
    logoutAccountMutation.mutate()
  }

  return (
    <div className='flex justify-between'>
      <div className='flex  cursor-pointer items-center ml-9'>
        <div className='text-left text-white'>Kênh Người Bán</div>
        <div className='h-4 w-[1px] bg-white m-1' />
        <div className='text-left text-white'>Trở thành người bán Shopee</div>
        <div className='h-4 w-[1px] bg-white m-1' />
        <Popover
          renderPopover={
            <div>
              <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                  alt='download_qr_code'
                  className='w-28 h-28 shadow-md '
                />
              </a>
            </div>
          }
        >
          <div className='text-left text-white'>Tải ứng dụng</div>
        </Popover>
      </div>
      <div className='flex justify-end'>
        <Popover
          className='flex cursor-pointer items-center py-1 hover:text-white/70'
          renderPopover={
            <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
              <div className='flex flex-col py-2 pr-28 pl-3'>
                <button className='py-2 px-3 text-left hover:text-orange'>Tiếng Việt</button>
                <button className='mt-2 py-2 px-3 text-left hover:text-orange'>English</button>
              </div>
            </div>
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </svg>
          <span className='mx-1'>Tiếng việt</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </Popover>
        {isAuthenticated && (
          <Popover
            className='ml-6 flex cursor-pointer items-center py-1 hover:text-white/70'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <Link
                  to={path.profile}
                  className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to={path.historyPurchase}
                  className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đơn mua
                </Link>
                <button
                  onClick={handleLogout}
                  className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đăng xuất
                </button>
              </div>
            }
          >
            <div className='mr-2 h-6 w-6 flex-shrink-0'>
              <img
                src={getAvatarUrl(profile?.avatar)}
                alt='avatar'
                className='h-full w-full rounded-full object-cover'
              />
            </div>
            <div>{profile?.name || profile?.email}</div>
          </Popover>
        )}
        {!isAuthenticated && (
          <div className='flex items-center'>
            <Link to={path.register} className='mx-3 capitalize hover:text-white/70'>
              Đăng ký
            </Link>
            <div className='h-4 border-r-[1px] border-r-white/40' />
            <Link to={path.login} className='mx-3 capitalize hover:text-white/70'>
              Đăng nhập
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
