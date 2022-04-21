
function product(state = {}, action){
  if (action.type === 'INITIAL_LOADING'){
    return {
      ...state,
      imBusy: true,
      error: false,
      productInfo: {}
    }
  } if (action.type === 'PRODUCT_FETCH_SUCCESS'){
    return {
      ...state,
      imBusy: false,
      error: false,
      productInfo: action.payload
    }
  } if (action.type === 'PRODUCT_FETCH_ERROR'){
    return {
      ...state,
      imBusy: false,
      productInfo: action.payload
    }
  }  if (action.type === 'APP_CONFIG_FETCH_SUCCESS'){
    return {
      ...state,
      imBusy: false,
      error: false,
      appConfig: action.payload
    }
  } if (action.type === 'APP_CONFIG_FETCH_ERROR'){
    return {
      ...state,
      imBusy: false,
      appConfig: action.payload
    }
  } else{
    return state;
  }
}

export default product;
