//BASEURL
//TODO:
// const BASE_URL = 'https://api.tijarat.com/';
const BASE_URL = 'https://api-dev.tijarat.com/';
//Base Url

const ENDPOINTS = {
  LOGIN: 'login',
  SIGNUP: 'register',
  FORGOT_PASS: 'forgot-password',
  CHANGE_PASS: 'change-password',
  ADDPRODUCT: 'products/create',
  ARCHIVEPRODUCT: 'mobile/product/get-archived-products-by-seller/',
  DASHBOARD: 'seller/dashboard',
  RECENT_ORDERS: 'mobile/order/get-recent-orders/',
  SELLER_ORDER: 'order/',
};

export {BASE_URL, ENDPOINTS};
