import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './SellerSlices/AddProductSlice';
import dashbordReducer from './SellerSlices/dashboardSlice';
import userReducer from './userSlice';
import archiveReducer from './SellerSlices/ArchiveProductSlice';
import recentOrderReducer from './SellerSlices/RecentOrderSlice';
import sellerOrderReducer from './SellerSlices/SellerOrderSlice';
import offersReducer from './SellerSlices/SellerOfferSlice';
import offerDetailsReducer from './SellerSlices/OfferDetailSlice';
import orderDetailsReducer from './SellerSlices/orderDetailSlice';
import sellerAllProductsReducer from './SellerSlices/sellerAllProductsSlice';
import addProductReducer from './SellerSlices/AddProductSlice';
import categoriesReducer from './SellerSlices/categoriesSlice';
import citiesReducer from './SellerSlices/citiesfromCountries';
import countriesReducer from './SellerSlices/countriesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  dashboard: dashbordReducer,
  userId: userReducer,
  recentOrder: recentOrderReducer,
  archiveProducts: archiveReducer,
  sellerOrder: sellerOrderReducer,
  offers: offersReducer,
  offerDetails: offerDetailsReducer,
  orderDetails: orderDetailsReducer,
  sellerAllProducts: sellerAllProductsReducer,
  addProduct: addProductReducer,
  categories: categoriesReducer,
  cities: citiesReducer,
  countries: countriesReducer,

  // Add other reducers here
});

export default rootReducer;
