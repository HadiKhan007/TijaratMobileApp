import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {useSelector} from 'react-redux';

const OrderSummaryCard = ({data}) => {
  const orderDetails = useSelector(state => state.orderDetails?.orderDetails);
  const totalAmount = orderDetails?.order[0]?.orders[0]?.total;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Subtotal:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>{totalAmount}</Text>
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
          <Text style={[styles.subStyle, {color: colors.p1}]}>
            {totalAmount}
          </Text>
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
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
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
