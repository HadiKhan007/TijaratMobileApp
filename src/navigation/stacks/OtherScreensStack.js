import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceOrder from '../../screens/App/PlaceOrder/PlaceOrder';
import ConfirmOrder from '../../screens/App/ConfirmOrder/ConfirmOrder';
import ClickedItem from '../../screens/App/ClickedItem/ClickedItem';
import BuyProduct from '../../screens/App/BuyProduct/BuyProduct';
import MakeOffer from '../../screens/App/MakeOffer/MakeOffer';

const Stack = createNativeStackNavigator();

function OtherScreensStack() {
  return (
    <Stack.Navigator
      initialRouteName="ClickedItem"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="ClickedItem" component={ClickedItem} />
      <Stack.Screen name="BuyProduct" component={BuyProduct} />
      <Stack.Screen name="MakeOffer" component={MakeOffer} />
    </Stack.Navigator>
  );
}

export default OtherScreensStack;
