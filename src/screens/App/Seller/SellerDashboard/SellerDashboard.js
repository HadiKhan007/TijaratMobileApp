import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {
  AppDivider,
  OrderCard,
  ProfileCard,
  ResultCard,
  TopHeader,
} from '../../../../component';
import {OrderData, appIcons} from '../../../../utilities';

const SellerDashboard = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Seller Dashboard" />
        <ProfileCard
          email="hamza1@gmail.com"
          title="Hamza Habib"
          iconName={appIcons.person}
        />
        <View style={{flexDirection: 'row'}}>
          <ResultCard
            iconName={appIcons.promotion}
            title="Total Sale"
            number="12,34567"
          />
          <ResultCard
            iconName={appIcons.earn}
            title="Total Earning"
            number="12,34567"
          />
          <ResultCard
            iconName={appIcons.promotion}
            title="Total Order"
            number="12,34567"
          />
        </View>
        <OrderCard />
      </View>
    </SafeAreaView>
  );
};

export default SellerDashboard;
