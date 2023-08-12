import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const SummaryCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>Item</Text>
        <Text style={styles.rightText}>2</Text>
      </View>
      <AppDivider />
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>Delivery charges</Text>
        <Text style={styles.rightText}>100</Text>
      </View>
      <AppDivider />
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>Subtotal</Text>
        <Text style={styles.rightText}>2800</Text>
      </View>
      <AppDivider />
      <View style={styles.totalCon}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>2900</Text>
      </View>
    </View>
  );
};

export {SummaryCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('2'),
    paddingVertical: WP('4'),
    backgroundColor: colors.w2,
    borderRadius: 10,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  rightText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  totalText: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
  },
  totalAmount: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
  },
  totalCon: {
    backgroundColor: colors.g1,
    padding: WP('2.5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
});
