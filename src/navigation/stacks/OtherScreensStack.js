import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceOrder from '../../screens/App/PlaceOrder/PlaceOrder';

const Stack = createNativeStackNavigator();

function OtherScreensStack() {
  return (
    <Stack.Navigator
      initialRouteName="PlaceOrder"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
    </Stack.Navigator>
  );
}

export default OtherScreensStack;
