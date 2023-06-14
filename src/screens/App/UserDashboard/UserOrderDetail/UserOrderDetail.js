import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppTitle, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';
import styles from './styles';

const UserOrderDetail = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Order Detail" iconName={appIcons.backArrow} />
        <AppTitle Title="Your Order Details" />
      </View>
    </SafeAreaView>
  );
};

export default UserOrderDetail;
