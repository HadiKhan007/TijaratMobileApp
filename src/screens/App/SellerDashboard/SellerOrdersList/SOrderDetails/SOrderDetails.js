import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';
import OrdersTopTabs from '../../../../../navigation/stacks/TopTabs/OrdersTopTabs';

const SOrderDetails = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Order Detail" />
        <AppTitle
          Title="Your Order Detail"
          mainContainer={styles.titleContainer}
        />
      </View>
      <OrdersTopTabs />
    </SafeAreaView>
  );
};

export default SOrderDetails;
