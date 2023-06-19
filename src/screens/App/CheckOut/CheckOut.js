import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppDivider,
  AppTitle,
  DeliveryCard,
  SummaryCard,
  TopHeader,
  WishCard,
} from '../../../component';
import {appIcons} from '../../../utilities';

const CheckOut = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} />
        <AppTitle Title="Seller: Mian Fahad" mainContainer={styles.titleCon} />
        <WishCard />
        <AppDivider />

        <AppTitle
          Title="Deliver To:   Hamza Ali"
          mainContainer={styles.titleCon}
        />
        <DeliveryCard />
        <AppTitle Title="Summary:" mainContainer={styles.titleCon} />
        <SummaryCard />
        <AppButton title="Confirm Order Now" containerStyle={styles.btnStyle} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckOut;
