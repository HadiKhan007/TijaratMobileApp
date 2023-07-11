/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OrderData, WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const SellerOrderCard = ({orderId, firstTitle, SecondTitle, onPress}) => {
  const [data, setData] = useState(OrderData);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle]}>Order ID</Text>
        <Text style={[styles.subTitle, {marginLeft: WP('5')}]}>Buyer </Text>
        <Text style={[styles.subTitle, {marginLeft: WP('20')}]}>Status</Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={() => (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.rowContainer}>
              <Text style={styles.idStyle}>10082-1</Text>
              <Text style={styles.textStyle}>Ali</Text>
              <Text
                style={[
                  styles.textStyle,
                  {marginLeft: WP('31'), marginRight: 0},
                ]}>
                Delivered
              </Text>
            </View>
            <AppDivider
              lineStyle={[styles.lineStyle, {backgroundColor: colors.p6}]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export {SellerOrderCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: WP('4'),
    backgroundColor: colors.w1,
    marginVertical: WP('5'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.p5,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
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
    marginLeft: WP('5'),
  },
});
