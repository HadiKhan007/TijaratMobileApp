import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TopHeader} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';
import styles from './styles';

const ShippingRules = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader
          iconName={appIcons.backArrow}
          title="General Shipping Rules"
        />
      </View>
    </SafeAreaView>
  );
};

export default ShippingRules;
