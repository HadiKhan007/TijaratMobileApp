/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors, WP} from '../../utilities';
import {DrawerContent} from '../../component';
import HomeStack from './HomeStack';
import BottomTabs from './BottomTabs';
import UserStack from './UserStack';
import Notification from '../../screens/App/Notification/Notification';
import Wishlist from '../../screens/App/Wishlist/Wishlist';
import AllCategories from '../../screens/App/HomePage/AllCategories/AllCategories';
import AddToCart from '../../screens/App/AddToCart/AddToCart';
import CheckOut from '../../screens/App/CheckOut/CheckOut';

const Drawer = createDrawerNavigator();

function MyDrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: colors.w1, width: WP('80')},
        drawerPosition: 'left',
        drawerType: 'front',
      }}
      initialRouteName={'HomeStack'}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="UserStack" component={UserStack} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="AllCategories" component={AllCategories} />
      <Drawer.Screen name="AddToCart" component={AddToCart} />
      <Drawer.Screen name="CheckOut" component={CheckOut} />
    </Drawer.Navigator>
  );
}

export default MyDrawerStack;

// import Notification from '../../screens/App/Notification/Notification';
// import BottomTabs from './BottomTabs';
// import {DrawerContent} from '../../component';
// import Wishlist from '../../screens/App/Wishlist/Wishlist';
// import UserStack from './UserStack';
// import HomeStack from './HomeStack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {colors} from '../../utilities';

// const Drawer = createDrawerNavigator();

// function MyNewDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="BottomTabs"
//       screenOptions={{
//         drawerStyle: {width: '90%', backgroundColor: colors.bgColor},
//         overlayColor: 'transparent',
//         headerShown: false,
//       }}
//       drawerContent={props => <DrawerContent {...props} />}>
//       <Drawer.Screen
//         name="BottomTabs"
//         component={BottomTabs}
//         options={{drawerLabel: 'BottomTabs'}}
//       />
//       <Drawer.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{drawerLabel: 'HomeStack'}}
//       />
//       <Drawer.Screen
//         name="Notifications"
//         component={Notification}
//         options={{drawerLabel: 'Notification'}}
//       />
//       <Drawer.Screen
//         name="Wishlist"
//         component={Wishlist}
//         options={{drawerLabel: 'Wishlist'}}
//       />
//       <Drawer.Screen
//         name="UserStack"
//         component={UserStack}
//         options={{drawerLabel: 'UserStack'}}
//       />
//     </Drawer.Navigator>
//   );
// }

// export default MyNewDrawer;
