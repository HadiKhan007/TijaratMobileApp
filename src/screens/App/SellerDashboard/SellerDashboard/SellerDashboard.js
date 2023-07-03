import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {
  AccountCard,
  OrderCard,
  ResultCard,
  TopHeader,
} from '../../../../component';
import {appIcons, colors} from '../../../../utilities';
import {FloatingAction} from 'react-native-floating-action';
import {DrawerActions} from '@react-navigation/native';

const SellerDashboard = ({navigation}) => {
  const actions = [
    {
      text: 'Profile',
      icon: appIcons.person,
      name: 'SellerProfile',
      position: 1,
      color: colors.p1,
    },
    {
      text: 'Payment Method',
      icon: appIcons.payment,
      name: 'SellerPayment',
      position: 2,
      color: colors.p1,
    },
    {
      text: 'Shipping Rules',
      icon: appIcons.payment,
      name: 'ShippingRules',
      position: 3,
      color: colors.p1,
    },
  ];
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <TopHeader
            iconName={appIcons.menuIcon}
            title="Seller Dashboard"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <AccountCard
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
          <OrderCard />
        </ScrollView>

        {/* <View style={styles.positionCon}> */}
        <FloatingAction
          shadow={true}
          color={colors.p1}
          position="right"
          actions={actions}
          onPressItem={name => navigation.navigate(`${name}`)}
        />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default SellerDashboard;
