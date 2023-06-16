/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react/no-unstable-nested-components */
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {colors, WP} from '../../utilities';
// import {DrawerContent} from '../../component';
// import HomeStack from './HomeStack';
// import BottomTabs from './BottomTabs';

// const Drawer = createDrawerNavigator();

// function MyDrawerStack() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {backgroundColor: colors.w1, width: WP('71')},
//         drawerPosition: 'left',
//         drawerType: 'front',
//       }}
//       initialRouteName={'BottomTabs'}
//       drawerContent={props => <DrawerContent {...props} />}>
//       {/* <Drawer.Screen name="HomeStack" component={HomeStack} /> */}
//       <Drawer.Screen name="BottomTabs" component={BottomTabs} />
//     </Drawer.Navigator>
//   );
// }

// export default MyDrawerStack;

import {createDrawerNavigator} from '@react-navigation/drawer';
import Notification from '../../screens/App/Notification/Notification';
import GetStarted from '../../screens/Auth/GetStarted/GetStarted';
import BottomTabs from './BottomTabs';
import {DrawerContent} from '../../component';
import Wishlist from '../../screens/App/Wishlist/Wishlist';

const Drawer = createDrawerNavigator();

function MyNewDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Wishlist"
      screenOptions={{
        drawerStyle: {width: '90%', backgroundColor: 'red'},
        overlayColor: 'transparent',
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{drawerLabel: 'BottomTabs'}}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notification}
        options={{drawerLabel: 'Notification'}}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{drawerLabel: 'Wishlist'}}
      />
    </Drawer.Navigator>
  );
}

export default MyNewDrawer;
