import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema, schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setIsAuthenticated, setProfile } from 'src/redux/redux'

type FormData = Pick<Schema, 'email' | 'password'>

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver<FormData>(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // console.log(data.data)
        dispatch(setIsAuthenticated(true))
        dispatch(setProfile(data.data.data.user))
        toast.success(`${data.data.message}`, { autoClose: 1300, position: 'top-center' })
        navigate('/') // cho về trang chủ
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const loginError = error.response?.data.data
          for (let key in loginError) {
            setError(key as keyof FormData, {
              message: loginError[key as keyof FormData],
              type: 'Sever'
            })
          }
          toast.error(`${loginError?.password}`, { autoClose: 7000, position: 'top-center' })
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <Helmet>
        <title>Đăng nhập | Shope</title>
        <meta name='description' content='Đăng nhập' />
      </Helmet>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                  isLoading={loginMutation.isLoading}
                  disabled={loginMutation.isLoading}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='text-center mt-4'>
                Bằng việc đăng ký bạn đã đồng ý với Shope về
                <br />
                <a
                  href='https://help.shopee.vn/portal/article/77243'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-red-600 m-2'
                >
                  Điều khoản dịch vụ
                </a>
                &
                <a
                  href='https://help.shopee.vn/portal/article/77244'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-red-600 m-2'
                >
                  Chính sách bảo mật
                </a>
              </div>

              <div className='mt-5 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
