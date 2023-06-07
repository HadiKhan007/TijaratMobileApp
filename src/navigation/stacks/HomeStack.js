import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/App/HomePage/HomeScreen/HomeScreen';
import AllCategories from '../../screens/App/HomePage/AllCategories/AllCategories';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
    </Stack.Navigator>
  );
}

export default HomeStack;
