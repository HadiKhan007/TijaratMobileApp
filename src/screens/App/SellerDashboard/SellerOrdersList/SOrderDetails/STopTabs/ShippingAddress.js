import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {WP, colors} from '../../../../../../utilities';
import {ShippingAddressCard} from '../../../../../../component';

const ShippingAddress = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <ShippingAddressCard />
      </View>
    </SafeAreaView>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
});
