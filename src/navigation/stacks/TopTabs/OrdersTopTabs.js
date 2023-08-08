/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {OrdersTabsBar} from '../../../component';
import ActiveProducts from '../../../screens/App/SellerDashboard/SellerOrdersList/SOrderDetails/STopTabs/ActiveProducts';
import ShippingAddress from '../../../screens/App/SellerDashboard/SellerOrdersList/SOrderDetails/STopTabs/ShippingAddress';
import {StyleSheet} from 'react-native';
import CancelProducts from '../../../screens/App/SellerDashboard/SellerOrdersList/SOrderDetails/STopTabs/CancelProducts';

const Tab = createMaterialTopTabNavigator();

const OrdersTopTabs = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   indicatorStyle: styles.tabIndicator,
      // }}
      sceneContainerStyle={{
        indicatorStyle: styles.tabIndicator,
      }}
      tabBar={props => <OrdersTabsBar {...props} />}>
      <Tab.Screen name="Active Product(s)" component={ActiveProducts} />
      <Tab.Screen name="Shipping Address" component={ShippingAddress} />
      <Tab.Screen name="CancelProducts" component={CancelProducts} />
    </Tab.Navigator>
  );
};

export default OrdersTopTabs;

const styles = StyleSheet.create({
  tabIndicator: {
    backgroundColor: 'blue', // Customize the color of the bottom line
    height: 2, // Customize the height of the bottom line
  },
});
