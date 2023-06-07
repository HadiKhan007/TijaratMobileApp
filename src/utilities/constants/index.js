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
    onPress: 'Profile',
  },
  {
    id: 1,
    title: 'My Tijarat',
    leftIcon: appIcons.person,
    onPress: 'ClientForms',
  },
  {
    id: 2,
    title: 'Seller Dashboard',
    leftIcon: appIcons.dashboard,
    onPress: 'OnboardingQuestions',
  },
  {
    id: 3,
    title: 'Notifications',
    leftIcon: appIcons.notification,
    onPress: 'SWOTAnalysis',
  },
  {
    id: 4,
    title: 'Category',
    leftIcon: appIcons.category,
    onPress: 'Notes',
  },
  {
    id: 5,
    title: 'Wishlist',
    leftIcon: appIcons.heart,
    onPress: '',
  },
  {
    id: 6,
    title: 'Add to Cart',
    leftIcon: appIcons.cart,
    onPress: 'Legacy',
  },
  {
    id: 7,
    title: 'Help & Contact',
    leftIcon: appIcons.phone,
    onPress: 'ResetPassword',
  },
  {
    id: 10,
    title: 'LogOut',
    leftIcon: appIcons.logOut,
    onPress: 'PrivacyPolicy',
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
  },
  {
    id: 2,
    iconName: appIcons.beauty,
    title: 'Health & Beauty',
  },
  {
    id: 3,
    iconName: appIcons.pet,
    title: 'Groceries & Pets',
  },
  {
    id: 4,
    iconName: appIcons.garden,
    title: 'Home & Garden',
  },
  {
    id: 5,
    iconName: appIcons.toy,
    title: 'Babies & Toys',
  },
  {
    id: 6,
    iconName: appIcons.beauty,
    title: 'Health & Beauty',
  },
  {
    id: 7,
    iconName: appIcons.pet,
    title: 'Groceries & Pets',
  },
  {
    id: 8,
    iconName: appIcons.garden,
    title: 'Home & Garden',
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

export {
  drawerData,
  default_img,
  image_options,
  championOptions,
  SOCKET_URL,
  OrderData,
  categoryData,
};
