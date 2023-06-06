import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';
import SellerAddProducts from '../../../screens/App/Seller/SellerAddProducts/SellerAddProducts';

const Stack = createNativeStackNavigator();

function SAddProductsStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerAddProducts"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SellerAddProducts" component={SellerAddProducts} />
    </Stack.Navigator>
  );
}

export default SAddProductsStack;
