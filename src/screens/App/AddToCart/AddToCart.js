import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppDivider,
  AppTitle,
  SummaryCard,
  SummeryCard,
  TopHeader,
  WishCard,
} from '../../../component';
import {appIcons} from '../../../utilities';

const AddToCart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <TopHeader title="My Cart" iconName={appIcons.backArrow} />
        <AppTitle Title="Seller: Mian Fahad" mainContainer={styles.titleCon} />
        <WishCard />
        <AppDivider />
        <WishCard />
        <AppDivider />
        <AppTitle Title="Summary:" mainContainer={styles.titleCon} />
        <SummaryCard />
        <AppButton
          title="Go to Checkout"
          containerStyle={styles.btnStyle}
          onPress={() => navigation.navigate('CheckOut')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddToCart;
