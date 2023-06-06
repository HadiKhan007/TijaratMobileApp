import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Auth/Splash/Splash';
import HomeStack from './stacks/HomeStack';
import AuthStack from './stacks/AuthStack';
import MyDrawerStack from './stacks/MyDrawerStack';
import {BottomTabs} from './stacks/BottomTabs';

const AppStack = createNativeStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'App'} component={MyDrawerStack} />
        <AppStack.Screen name={'HomeStack'} component={HomeStack} />
        <AppStack.Screen name={'AuthStack'} component={AuthStack} />
        {/* <AppStack.Screen name={'BottomTabs'} component={BottomTabs} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
