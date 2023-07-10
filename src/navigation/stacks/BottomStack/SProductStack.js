import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/SellerDashboard/SellerDashboard/SellerDashboard';
import SellerProducts from '../../../screens/App/SellerDashboard/SellerProducts/SellerProducts';
import ArchiveProducts from '../../../screens/App/SellerDashboard/SellerProducts/ArchiveProducts/ArchiveProducts';

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
      <Stack.Screen name="ArchiveProducts" component={ArchiveProducts} />
    </Stack.Navigator>
  );
}

export default SProductStack;
