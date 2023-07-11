import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/SellerDashboard/SellerDashboard/SellerDashboard';
import SellerOrdersList from '../../../screens/App/SellerDashboard/SellerOrdersList/SellerOrdersList';
import SOrderDetails from '../../../screens/App/SellerDashboard/SellerOrdersList/SOrderDetails/SOrderDetails';

const Stack = createNativeStackNavigator();

function SOrdersStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerOrdersList"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SellerOrdersList" component={SellerOrdersList} />
      <Stack.Screen name="SOrderDetails" component={SOrderDetails} />
    </Stack.Navigator>
  );
}

export default SOrdersStack;
