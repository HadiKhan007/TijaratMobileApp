import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SellerRegister from '../../screens/App/SellerRegister/SellerRegister';

const Stack = createNativeStackNavigator();

function SellerRegisterStack() {
  return (
    <Stack.Navigator
      initialRouteName="SellerRegister"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="SellerRegister" component={SellerRegister} />
    </Stack.Navigator>
  );
}

export default SellerRegisterStack;
