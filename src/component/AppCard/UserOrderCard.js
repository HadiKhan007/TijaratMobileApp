/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UserOrderData, WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const UserOrderCard = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle]}>Order ID</Text>
        <Text style={[styles.subTitle, {marginLeft: WP('8')}]}>Status </Text>
        <Text style={[styles.subTitle, {marginLeft: WP('12')}]}>
          Created Date
        </Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <FlatList
        data={UserOrderData}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              style={styles.rowContainer}
              onPress={() => navigation.navigate(item?.onPress)}>
              <Text style={styles.idStyle}>{item?.orderId}</Text>
              <Text style={styles.textStyle}>{item?.status}</Text>
              <Text
                style={[
                  styles.textStyle,
                  {marginLeft: WP('14'), marginRight: 0},
                ]}>
                {item?.CDate}
              </Text>
            </TouchableOpacity>
            <AppDivider
              lineStyle={[styles.lineStyle, {backgroundColor: colors.p6}]}
            />
          </>
        )}
      />
    </View>
  );
};

export {UserOrderCard};

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
    marginLeft: WP('10'),
  },
});
