import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './SellerSlices/AddProductSlice';
import dashbordReducer from './SellerSlices/dashboardSlice';
import userReducer from './userSlice';
import recentOrdersReducer from './SellerSlices/RecentOrderSlice';
import archiveReducer from './SellerSlices/ArchiveProductSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  dashboard: dashbordReducer,
  userId: userReducer,
  recentOrder: recentOrdersReducer,
  archivedProducts: archiveReducer,
  // Add other reducers here
});

export default rootReducer;
