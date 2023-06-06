import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OrderData, WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const OrderCard = () => {
  const [data, setData] = useState(OrderData);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>Recent Order</Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle, {marginRight: WP('5')}]}>Order ID</Text>
        <Text style={[styles.subTitle, {marginRight: WP('20')}]}>
          Product Detail
        </Text>
        <Text style={[styles.subTitle]}>Status</Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <View style={styles.rowContainer}>
        <Text style={styles.idStyle}>10082-1</Text>
        <Text style={styles.textStyle}>House number, house...</Text>
        <Text style={[styles.textStyle, {marginRight: WP('0')}]}>
          Delivered
        </Text>
      </View>
      <AppDivider
        lineStyle={[styles.lineStyle, {backgroundColor: colors.p6}]}
      />
    </View>
  );
};

export {OrderCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('3'),
    paddingVertical: WP('4'),
    backgroundColor: colors.w1,
    marginVertical: WP('5'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_bold,
    fontSize: size.medium,
  },
  subTitle: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    marginRight: WP('4'),
  },
  lineStyle: {
    backgroundColor: colors.p5,
  },
  idStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    marginRight: WP('9'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    marginRight: WP('12'),
  },
});
