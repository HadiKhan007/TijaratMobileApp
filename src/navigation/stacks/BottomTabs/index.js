import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';
import Products from '../../../screens/App/Seller/Products/Products';
import AddProducts from '../../../screens/App/Seller/AddProducts/AddProducts';
import OrderList from '../../../screens/App/Seller/OrdersList/OrderList';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="SellerDashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Navigator>
        <Tab.Screen name="SellerDashboard" component={SellerDashboard} />
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="AddProducts" component={AddProducts} />
        <Tab.Screen name="OrderList" component={OrderList} />
        {/* <Tab.Screen name="OrderList" component={MoreLis} /> */}
      </Tab.Navigator>
    </Tab.Navigator>
  );
};

export {BottomTabs};
