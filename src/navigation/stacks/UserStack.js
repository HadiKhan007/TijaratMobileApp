import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDashboard from '../../screens/App/UserDashboard/UserDashboard/UserDashboard';
import MyDashboard from '../../screens/App/UserDashboard/MyDashboard/MyDashboard';
import UChangePassword from '../../screens/App/UserDashboard/UChangePassword/UChangePassword';
import Uoffers from '../../screens/App/UserDashboard/Uoffers/Uoffers';
import UDeactiveAccount from '../../screens/App/UserDashboard/UDeactiveAccount/UDeactiveAccount';
import UMyAccount from '../../screens/App/UserDashboard/UMyAccount/UMyAccount';
import UOrders from '../../screens/App/UserDashboard/UOrders/UOrders';

const Stack = createNativeStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserDashboard"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="MyDashboard" component={MyDashboard} />
      <Stack.Screen name="UMyAccount" component={UMyAccount} />
      <Stack.Screen name="UChangePassword" component={UChangePassword} />
      <Stack.Screen name="Uoffers" component={Uoffers} />
      <Stack.Screen name="UOrders" component={UOrders} />
      <Stack.Screen name="UDeactiveAccount" component={UDeactiveAccount} />
    </Stack.Navigator>
  );
}

export default UserStack;
