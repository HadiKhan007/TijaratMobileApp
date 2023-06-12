import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Splash from '../screens/Auth/Splash/Splash';
import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';
import MyDrawerStack from './stacks/MyDrawerStack';
import BottomTabs from './stacks/BottomTabs';
import {LogBox} from 'react-native';
import UserStack from './stacks/UserStack';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'HomeStack'} component={HomeStack} />
        <AppStack.Screen name={'AppNew'} component={MyDrawerStack} />
        <AppStack.Screen name={'AuthStack'} component={AuthStack} />
        <AppStack.Screen name={'BottomTabs'} component={BottomTabs} />
        <AppStack.Screen name={'UserStack'} component={UserStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
