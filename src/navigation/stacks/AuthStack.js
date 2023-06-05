import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogIn from '../../screens/Auth/LogIn/LogIn';
import ForgotPassword from '../../screens/Auth/ForgotPassword/ForgotPassword';
import SignUp from '../../screens/Auth/SignUp/SignUp';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;
