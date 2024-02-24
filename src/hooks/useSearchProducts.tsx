import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import { useForm } from 'react-hook-form'
import useQueryConfig from './useQueryConfig'
import { schema, Schema } from 'src/utils/rules'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

export default function useSearchProducts() {
  type FormData = Pick<Schema, 'name'>
  const nameSchema = schema.pick(['name'])
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })

  const handleSearch = handleSubmit((data) => {
    // console.log(data)
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by', 'category']
        )
      : omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['category']
        )
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { handleSearch, register }
}
