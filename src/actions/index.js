import { api } from '../api/product.api';
import { PRODUCT_API_DEFAULT_PARAMS } from '../common/globals';

export function loadProductData() {
  return function(dispatch) {
      return api.loadProduct().then(data => {
          // dispatch
          dispatch({
            type: 'PRODUCT_FETCH_SUCCESS',
            payload: data,
          });
      });
  };
}

export function loadAppConfig() {
  return function(dispatch) {
      return api.loadAppConfig().then(data => {
          // dispatch
          dispatch({
            type: 'APP_CONFIG_FETCH_SUCCESS',
            payload: data,
          });
      });
  };
}

