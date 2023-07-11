import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const OrderSummaryCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Subtotal:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>194,000</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Shipping:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Rs. 0</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Tax(GST):</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Rs. 0</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, {backgroundColor: colors.p6}]}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Total:</Text>
        </View>
        <View style={styles.column}>
          <Text style={[styles.subStyle, {color: colors.p1}]}>194,000</Text>
        </View>
      </View>
    </View>
  );
};

export {OrderSummaryCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    marginVertical: WP('3'),
  },
  column: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2.5'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  subStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
});
