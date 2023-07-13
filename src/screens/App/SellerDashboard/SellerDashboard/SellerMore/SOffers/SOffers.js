import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  AppTitle,
  SellerOfferCard,
  TopHeader,
} from '../../../../../../component';
import styles from './styles';
import {appIcons} from '../../../../../../utilities';

const SOffers = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Offers" iconName={appIcons.backArrow} />
        <AppTitle Title="Offers" mainContainer={styles.titleContainer} />
        <SellerOfferCard onPress={() => navigation.navigate('SOfferDetails')} />
      </View>
    </SafeAreaView>
  );
};

export default SOffers;
