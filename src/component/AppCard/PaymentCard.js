import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors} from '../../utilities';
import {ClickButton} from '../AppButton/ClickButton';

const PaymentCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Payment Methods</Text>
      <ClickButton title="COD" />
      <ClickButton title="Eadypassa" secondIcon />
      <ClickButton title="Jazzcash" secondIcon />
    </View>
  );
};

export {PaymentCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    padding: WP('5'),
    borderRadius: 8,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    marginVertical: WP('3'),
  },
});
