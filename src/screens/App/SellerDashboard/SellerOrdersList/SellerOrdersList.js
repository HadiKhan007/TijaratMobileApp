import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, SellerOrderCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';

const SellerOrdersList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Orders" />
        <AppTitle Title="Order" mainContainer={styles.titleContainer} />
        <SellerOrderCard onPress={() => navigation.navigate('SOrderDetails')} />
      </View>
    </SafeAreaView>
  );
};

export default SellerOrdersList;
