import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
// Import other reducers if needed

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
