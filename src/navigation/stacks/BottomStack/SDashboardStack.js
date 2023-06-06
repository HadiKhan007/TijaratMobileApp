import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';

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
    </Stack.Navigator>
  );
}

export default SDashboardStack;
