import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HomeTabsBar} from '../../../component';
import Categories from '../../../screens/App/HomePage/HomeScreen/TopTabs/Categories';
import Fashion from '../../../screens/App/HomePage/HomeScreen/TopTabs/Fashion';
import Deals from '../../../screens/App/HomePage/HomeScreen/TopTabs/Deals';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <HomeTabsBar {...props} />}>
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Fashion" component={Fashion} />
      <Tab.Screen name="Deals" component={Deals} />
    </Tab.Navigator>
  );
};

export default HomeTopTabs;
