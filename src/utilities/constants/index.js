import {appIcons} from '../assets';

//TODO
const isProduction = false;
const SOCKET_URL = isProduction
  ? 'https://api.winrateapp.com/'
  : 'https://dev.winrateapp.com/';

let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

let championOptions = [
  {id: 1, name: 'For Me', key: 'myself'},
  {id: 3, name: 'For Someone Else', key: 'someone'},
  {id: 2, name: 'For My Business', key: 'business'},
];

const default_img =
  'https://i1.sndcdn.com/avatars-000439901343-0dng23-t500x500.jpg';

const drawerData = [
  {
    id: 0,
    title: 'Home',
    leftIcon: appIcons.home,
    onPress: 'HomeStack',
  },
  {
    id: 1,
    title: 'User Dashboard',
    leftIcon: appIcons.person,
    onPress: 'UserStack',
  },
  {
    id: 2,
    title: 'Seller Dashboard',
    leftIcon: appIcons.dashboard,
    onPress: 'BottomTabs',
  },
  {
    id: 3,
    title: 'Notifications',
    leftIcon: appIcons.notification,
    onPress: 'Notification',
  },
  {
    id: 4,
    title: 'Category',
    leftIcon: appIcons.category,
    onPress: 'AllCategories',
  },
  {
    id: 5,
    title: 'Wishlist',
    leftIcon: appIcons.heart,
    onPress: 'Wishlist',
  },
  {
    id: 6,
    title: 'Add to Cart',
    leftIcon: appIcons.cart,
    onPress: 'AddToCart',
  },
  {
    id: 7,
    title: 'Help & Contact',
    leftIcon: appIcons.phone,
    // onPress: 'ResetPassword',
  },
  {
    id: 10,
    title: 'LogOut',
    leftIcon: appIcons.logOut,
    // onPress: 'PrivacyPolicy',
  },
];

// const socialData = [
//   {
//     id: 0,
//     title: 'Facebook',
//     iconName: appIcons.fb,
//     connected: false,
//   },
//   // {
//   //   id: 1,
//   //   title: 'Instagram',
//   //   iconName: appIcons.insta,
//   //   connected: false,
//   // },
//   // {
//   //   id: 2,
//   //   title: 'Twitter',
//   //   iconName: appIcons.twitter2,
//   //   connected: true,
//   // },
// ];

const categoryData = [
  {
    id: 1,
    iconName: appIcons.toy,
    title: 'Babies & Toys',
    onPress: 'OtherScreensStack',
  },
  {
    id: 2,
    iconName: appIcons.beauty,
    title: 'Health & Beauty',
    onPress: 'OtherScreensStack',
  },
  {
    id: 3,
    iconName: appIcons.pet,
    title: 'Groceries & Pets',
    onPress: 'OtherScreensStack',
  },
  {
    id: 4,
    iconName: appIcons.garden,
    title: 'Home & Garden',
    onPress: 'OtherScreensStack',
  },
  {
    id: 5,
    iconName: appIcons.toy,
    title: 'Babies & Toys',
    onPress: 'OtherScreensStack',
  },
  {
    id: 6,
    iconName: appIcons.beauty,
    title: 'Health & Beauty',
    onPress: 'OtherScreensStack',
  },
  {
    id: 7,
    iconName: appIcons.pet,
    title: 'Groceries & Pets',
    onPress: 'OtherScreensStack',
  },
  {
    id: 8,
    iconName: appIcons.garden,
    title: 'Home & Garden',
    onPress: 'OtherScreensStack',
  },
];

const OrderData = [
  {
    id: 0,
    orderId: 10082 - 1,
    orderDetail: 'House number, house...',
    orderStatus: 'Delivered',
  },
  {
    id: 1,
    orderId: 10082 - 1,
    orderDetail: 'House number, house...',
    orderStatus: 'Delivered',
  },
  {
    id: 2,
    orderId: 10082 - 1,
    orderDetail: 'House number, house...',
    orderStatus: 'Delivered',
  },
];
const UserDashboardData = [
  {
    id: 0,
    leftIcon: appIcons.dashboard,
    title: 'My Dashboard',
    rightIcon: appIcons.forwardArrow,
    onPress: 'MyDashboard',
  },
  {
    id: 1,
    leftIcon: appIcons.person,
    title: 'My Account',
    rightIcon: appIcons.forwardArrow,
    onPress: 'UMyAccount',
  },
  {
    id: 2,
    leftIcon: appIcons.lock,
    title: 'Change Password',
    rightIcon: appIcons.forwardArrow,
    onPress: 'UChangePassword',
  },
  {
    id: 3,
    leftIcon: appIcons.offerIcon,
    title: 'Offers',
    rightIcon: appIcons.forwardArrow,
    onPress: 'Uoffers',
  },
  {
    id: 4,
    leftIcon: appIcons.bag,
    title: 'Orders',
    rightIcon: appIcons.forwardArrow,
    onPress: 'UOrders',
  },
  {
    id: 5,
    leftIcon: appIcons.closeeye,
    title: 'Deactivate',
    rightIcon: appIcons.forwardArrow,
    onPress: 'UDeactiveAccount',
  },
];

const UserOrderData = [
  {
    id: 0,
    orderId: 10178,
    status: 'Processing',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
  {
    id: 1,
    orderId: 10178,
    status: 'Completed',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
  {
    id: 2,
    orderId: 10178,
    status: 'Completed',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
  {
    id: 3,
    orderId: 10178,
    status: 'Completed',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
  {
    id: 4,
    orderId: 10178,
    status: 'Completed',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
  {
    id: 5,
    orderId: 10178,
    status: 'Completed',
    CDate: 'March 30, 2023',
    onPress: 'UserOrderDetail',
  },
];

export {
  drawerData,
  default_img,
  image_options,
  championOptions,
  SOCKET_URL,
  OrderData,
  categoryData,
  UserDashboardData,
  UserOrderData,
};
