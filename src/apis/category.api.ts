import http from 'src/utils/http'
import { Category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>('categories')
  }
}

export default categoryApi
