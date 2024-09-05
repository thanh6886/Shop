import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import categoryApi from 'src/apis/category.api'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { ProductListConfig } from 'src/types/product.type'
import AsideFilter from './components/AsideFilter'
import Product from './components/Product/Product'
import SortProductList from './components/SortProductList'
import Carousel from 'src/components/Carousel/Carousel'

export default function ProductList() {
  const slides = [
    'https://cf.shopee.vn/file/sg-11134258-7rdyw-lzr4k99mb0o86f_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdwo-lzk693fv4v2y33_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdw7-lzr4ka8aw9ro97_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdy6-lzkgf6k13f4y73_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdvy-lzkggoe49uzwc8_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdys-lzk6yrxg9ahmbf_xxhdpi',
    'https://cf.shopee.vn/file/vn-11134258-7r98o-lzkfryt62i753b_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdyf-lzkg2c31v6kn03_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdvv-lzk5egosu89m00_xxhdpi',
    'https://cf.shopee.vn/file/sg-11134258-7rdvv-lzk5egosu89m00_xxhdpi'
  ]
  const queryConfig = useQueryConfig()

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })

  return (
    <div className='bg-gray-200'>
      <Helmet>
        <title>Trang chủ | Shop</title>
        <meta name='description' content='Trang chủ' />
      </Helmet>
      <div className='pl-3  pt-1 pb-5 grid grid-cols-11 '>
        <div className='col-span-6 col-start-2'>
          <Carousel slides={slides} />
        </div>

        <div className='col-span-4 w-[74%] ml-2'>
          <img src='https://cf.shopee.vn/file/sg-11134258-7rdwx-lzk759r61kree2_xhdpi' className='mb-1' />
          <img src='https://cf.shopee.vn/file/sg-11134258-7rdyw-lzkg2eg8d4hz8c_xhdpi' />
        </div>
      </div>

      <div className='container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            </div>
            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productsData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
