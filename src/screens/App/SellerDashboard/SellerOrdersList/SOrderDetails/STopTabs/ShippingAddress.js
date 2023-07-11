import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {WP, colors} from '../../../../../../utilities';

const ShippingAddress = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <Text>ShippingAddress</Text>
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
