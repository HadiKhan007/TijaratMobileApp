import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SellerDashboard from '../../../screens/App/SellerDashboard/SellerDashboard/SellerDashboard';
import SellerProfile from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/SellerProfile/SellerProfile';
import SellerPayment from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/SellerPayment/SellerPayment';
import ShippingRules from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/ShippingRules/ShippingRules';
import SUpdateprofile from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/SUpdateprofile/SUpdateprofile';
import EasyPaisa from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/SellerPayment/EasyPaisa/EasyPaisa';
import JazzCash from '../../../screens/App/SellerDashboard/SellerDashboard/SellerMore/SellerPayment/JazzCash/JazzCash';

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
      <Stack.Screen name="SUpdateprofile" component={SUpdateprofile} />
      <Stack.Screen name="EasyPaisa" component={EasyPaisa} />
      <Stack.Screen name="JazzCash" component={JazzCash} />
    </Stack.Navigator>
  );
}

export default SDashboardStack;
