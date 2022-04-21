import { request } from './request'
import { PRODUCT_API_DEFAULT_PARAMS } from '../common/globals'

class ProductAPI {
    loadProduct() {
        const url = `/product/6781/`

        const config = {
            method: 'GET'
        }

        return request(url, config)
    }

    loadAppConfig() {
        const url = `/configuration/1`

        const config = {
            method: 'GET'
        }

        return request(url, config)
    }

}

const api = new ProductAPI()

export {
  api
}