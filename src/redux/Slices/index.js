import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './SellerSlices/AddProductSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  // Add other reducers here
});

export default rootReducer;
