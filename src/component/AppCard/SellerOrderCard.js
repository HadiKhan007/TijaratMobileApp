/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const SellerOrderCard = ({sellerOrderData, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle]}>Order ID</Text>
        <Text style={[styles.subTitle]}>Buyer </Text>
        <Text style={[styles.subTitle]}>Status</Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <FlatList
        data={sellerOrderData?.order}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SOrderDetails', {
                orderID: sellerOrderData.order[index]?._id,
              })
            }>
            <View style={styles.rowContainer}>
              <Text style={styles.idStyle}>
                {sellerOrderData?.order[index]?.orders[0]?.childOrderNumber}
              </Text>
              <Text style={styles.textStyle}>
                {sellerOrderData?.order[index]?.orders[0]?.buyer?.firstName +
                  ' ' +
                  sellerOrderData?.order[index]?.orders[0]?.buyer?.lastName}
              </Text>
              <Text style={[styles.textStyle]}>
                {sellerOrderData?.order[index]?.orders[0]?.orderStatus}
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
    marginVertical: WP('4'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.p5,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('3'),
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  lineStyle: {
    backgroundColor: colors.p5,
  },
  idStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
});
