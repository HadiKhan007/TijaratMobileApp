/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/no-unstable-nested-components */
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SDashboardStack from '../BottomStack/SDashboardStack';
// import SProductStack from '../BottomStack/SProductStack';
// import SAddProductsStack from '../BottomStack/SAddProductsStack';
// import SOrdersStack from '../BottomStack/SOrdersStack';
// import SMoreItemsStack from '../BottomStack/SMoreItemsStack';
// import {BottomTab} from '../../../component';

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="SDashboardStack"
//       screenOptions={{
//         headerShown: false,
//       }}
//       // tabBar={props => <BottomTab {...props} />}
//     >
//       <Tab.Navigator>
//         <Tab.Screen name="SDashboardStack" component={SDashboardStack} />
//         <Tab.Screen name="SProductStack" component={SProductStack} />
//         <Tab.Screen name="SAddProductsStack" component={SAddProductsStack} />
//         <Tab.Screen name="SOrdersStack" component={SOrdersStack} />
//         <Tab.Screen name="SMoreItemsStack" component={SMoreItemsStack} />
//       </Tab.Navigator>
//     </Tab.Navigator>
//   );
// };

// export {BottomTabs};
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Image} from 'react-native';
// import DashBoardStack from '../stacks/BottomStack/DashBoardStack';
// import FavoriteStack from '../stacks/BottomStack/FavoriteStack';
// import CartItemStack from '../stacks/BottomStack/CartItemStack';
// import MoreDetailStack from '../stacks/BottomStack/MoreDetailStack';

// import MyDrawer from '../stacks/DrawerScreen/MyDrawer';
import SDashboardStack from '../BottomStack/SDashboardStack';
import SProductStack from '../BottomStack/SProductStack';
import SAddProductsStack from '../BottomStack/SAddProductsStack';
import SOrdersStack from '../BottomStack/SOrdersStack';
import {WP, appIcons, colors} from '../../../utilities';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="SDashboardStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.g10,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="SDashboardStack"
        component={SDashboardStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: WP(6),
                height: WP(6),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons.fSDashboard : appIcons.SDashboard}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SProductStack"
        component={SProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: WP(6),
                height: WP(6),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons.fProduct : appIcons.sProduct}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SAddProductsStack"
        component={SAddProductsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: WP(6),
                height: WP(6),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons.fAddProduct : appIcons.addProducts}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SOrdersStack"
        component={SOrdersStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: WP(6),
                height: WP(6),
                resizeMode: 'contain',
              }}
              source={focused ? appIcons.fOrder : appIcons.order}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
