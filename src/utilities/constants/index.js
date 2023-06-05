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

const championPlaceholder = [
  {
    title: 'For Me',
    data: [1],
  },
  {
    title: 'For Someone Else',
    data: [1],
  },
  {
    title: 'For My Business',
    data: [1],
  },
];

const drawerData = [
  {
    id: 0,
    title: 'Edit Profile',
    leftIcon: appIcons.cart,
    onPress: 'Profile',
  },
  {
    id: 1,
    title: 'Check In Form',
    leftIcon: appIcons.person,
    onPress: 'ClientForms',
  },
  {
    id: 2,
    title: 'Onboarding Questionnaire',
    leftIcon: appIcons.dashboard,
    onPress: 'OnboardingQuestions',
  },
  {
    id: 3,
    title: 'SWOT Analysis',
    leftIcon: appIcons.notification,
    onPress: 'SWOTAnalysis',
  },
  {
    id: 4,
    title: 'View Notes',
    leftIcon: appIcons.category,
    onPress: 'Notes',
  },
  {
    id: 5,
    title: 'Scheduled Calls',
    leftIcon: appIcons.heart,
    onPress: '',
  },
  {
    id: 6,
    title: 'Champion Legacy Statement',
    leftIcon: appIcons.cart,
    onPress: 'Legacy',
  },
  {
    id: 7,
    title: 'Change Password',
    leftIcon: appIcons.phone,
    onPress: 'ResetPassword',
  },
  {
    id: 10,
    title: 'Privacy Policy',
    leftIcon: appIcons.logOut,
    onPress: 'PrivacyPolicy',
  },
];

const socialData = [
  {
    id: 0,
    title: 'Facebook',
    iconName: appIcons.fb,
    connected: false,
  },
  {
    id: 1,
    title: 'Instagram',
    iconName: appIcons.insta,
    connected: false,
  },
  {
    id: 2,
    title: 'Twitter',
    iconName: appIcons.twitter2,
    connected: true,
  },
];

const SWOT_List = [
  {
    id: 1,
    title: 'STRENGTHS',
    answer: '',
  },
  {
    id: 2,
    title: 'WEAKNESSES',
    answer: '',
  },
  {
    id: 3,
    title: 'OPPORTUNITIES',
    answer: '',
  },
  {
    id: 4,
    title: 'THREATS',
    answer: '',
  },
];

const SWOT_HEADERS = [
  {
    id: 0,
    title: 'S',
    subTitle: 'STRENGTHS',
    selected: true,
  },
  {
    id: 1,
    title: 'W',
    subTitle: 'WEAKNESSES',
    selected: false,
  },
  {
    id: 2,
    title: 'O',
    subTitle: 'OPPORTUNITIES',
    selected: false,
  },
  {
    id: 3,
    title: 'T',
    subTitle: 'THREATS',
    selected: false,
  },
];

export {
  drawerData,
  socialData,
  default_img,
  image_options,
  championOptions,
  championPlaceholder,
  SOCKET_URL,
  SWOT_List,
  SWOT_HEADERS,
};
