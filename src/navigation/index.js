import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Splash from '../screens/Auth/Splash/Splash';
import AuthStack from './stacks/AuthStack';
import {LogBox} from 'react-native';
import MyNewDrawer from './stacks/MyDrawerStack';
import OtherScreensStack from './stacks/OtherScreensStack';

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
        <AppStack.Screen name={'AuthStack'} component={AuthStack} />
        <AppStack.Screen name={'MyNewDrawer'} component={MyNewDrawer} />
        <AppStack.Screen
          name={'OtherScreensStack'}
          component={OtherScreensStack}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default MainAppNav;
