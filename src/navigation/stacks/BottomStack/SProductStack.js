import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';
import SellerProducts from '../../../screens/App/Seller/SellerProducts/SellerProducts';

const Stack = createNativeStackNavigator();

function SProductStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerProducts"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SellerProducts" component={SellerProducts} />
    </Stack.Navigator>
  );
}

export default SProductStack;
