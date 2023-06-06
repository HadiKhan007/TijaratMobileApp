import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/Seller/SellerDashboard/SellerDashboard';
import SellerMoreItems from '../../../screens/App/Seller/SellerMoreItems/SellerMoreItems';

const Stack = createNativeStackNavigator();

function SMoreItemsStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerMoreItems"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="SellerMoreItems" component={SellerMoreItems} />
    </Stack.Navigator>
  );
}

export default SMoreItemsStack;
