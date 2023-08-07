import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, TopHeader} from '../../../../../../../component';
import {appIcons} from '../../../../../../../utilities';
import OfferDetailCard from '../../../../../../../component/AppCard/OfferDetailCard';

const SOfferDetails = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Offer Details" iconName={appIcons.backArrow} />
        <AppTitle
          Title="Your Offer Details"
          mainContainer={styles.titleContainer}
        />
        <OfferDetailCard />
      </View>
    </SafeAreaView>
  );
};

export default SOfferDetails;
