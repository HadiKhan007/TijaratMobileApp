import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {DistanceModal, RulesCard, TopHeader} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';
import styles from './styles';

const ShippingRules = () => {
  const distanceProps = {
    note: true,
    title: 'Add Rules by Distance',
    detail:
      '-- Please Add Shipment Details by distance in (KM) from your origin',
  };
  const cityProps = {
    note: false,
    title: 'Set Flat or Free Shipping Rates for Specific Cities',
    detail:
      '-- Please Add Shipment Details in (Countries, Cities , All over world , All over Pakistan) different areas for shipping your orders',
  };
  const countryProps = {
    note: false,
    title: 'Set Flat or Free Shipping Rates for Specific Countries',
    detail:
      '-- Please Add Shipment Details in (Countries, Cities , All over world , All over Pakistan) different areas for shipping your orders',
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <TopHeader
          iconName={appIcons.backArrow}
          title="General Shipping Rules"
          mainContainer={{marginBottom: 15}}
        />
        <RulesCard {...distanceProps} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingRules;
