import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogIn from '../../screens/Auth/LogIn/LogIn';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );
}

export default AuthStack;
