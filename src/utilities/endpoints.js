//BASEURL
//TODO:
// const BASE_URL = 'https://api.tijarat.com/';
const BASE_URL = 'https://api-dev.tijarat.com/';
const BASE_URL_IMG = 'https://d3jlztp2s39q5k.cloudfront.net/';
//Base Url

const ENDPOINTS = {
  LOGIN: 'login',
  SIGNUP: 'register',
  FORGOT_PASS: 'forgot-password',
  CHANGE_PASS: 'change-password',
  ARCHIVEPRODUCT: 'mobile/product/get-archived-products-by-seller/',
  DASHBOARD: 'seller/dashboard',
  RECENT_ORDERS: 'mobile/order/get-recent-orders/',
  SELLER_ORDER: 'order/',
  OFFERS: 'offer/seller/',
  OFFERS_DETAILS: 'offer/',
  COUNTER_OFFERS: 'offer/counter-offer/',
  ORDER_DETAILS: 'order/get-by-id/',
  SELLER_ALL_PRODUCTS: 'products/by-seller/',
  ADD_PRODUCTS: 'products/create',
  CATEGORIES: 'categories/list',
};

export {BASE_URL, ENDPOINTS, BASE_URL_IMG};
