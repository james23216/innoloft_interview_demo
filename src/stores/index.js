import { createStore, compose, applyMiddleware  } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk'; 
import { rootReducer } from '../reducers/index';

const defaultState = {
  product: {
    productInfo: {},
    error: false,
    imBusy: true
  }
};

// For Chrome Redux DevTools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, applyMiddleware(thunk));

// Without the Chrome Redux DevTools
// const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
