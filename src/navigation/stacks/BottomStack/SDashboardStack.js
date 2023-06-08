import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';
import SellerProfile from '../../../screens/App/Seller/SellerDashboard/SellerMore/SellerProfile/SellerProfile';
import SellerPayment from '../../../screens/App/Seller/SellerDashboard/SellerMore/SellerPayment/SellerPayment';
import ShippingRules from '../../../screens/App/Seller/SellerDashboard/SellerMore/ShippingRules/ShippingRules';

const Stack = createNativeStackNavigator();

function SDashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerDashboard"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SellerDashboard" component={SellerDashboard} />
      <Stack.Screen name="SellerProfile" component={SellerProfile} />
      <Stack.Screen name="SellerPayment" component={SellerPayment} />
      <Stack.Screen name="ShippingRules" component={ShippingRules} />
    </Stack.Navigator>
  );
}

export default SDashboardStack;
