import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import product from './product';

export const rootReducer = combineReducers({product, routing: routerReducer});
