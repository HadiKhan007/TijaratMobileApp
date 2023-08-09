import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const OrderCard = ({recentOrderData}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>Recent Order</Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle]}>Order ID</Text>
        <Text style={[styles.subTitle]}>Buyer</Text>
        <Text style={[styles.subTitle]}>Status</Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <FlatList
        data={recentOrderData}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({index}) => (
          <>
            <View style={styles.rowContainer}>
              <Text style={styles.idStyle}>
                {recentOrderData?.orders[index]?.orderId}
              </Text>
              <Text style={styles.textStyle}>
                {recentOrderData?.orders[index]?.buyer}
              </Text>
              <Text style={[styles.textStyle]}>
                {recentOrderData?.orders[index]?.orderStatus}
              </Text>
            </View>
            <AppDivider
              lineStyle={[styles.lineStyle, {backgroundColor: colors.p6}]}
            />
          </>
        )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_bold,
    fontSize: size.medium,
    marginVertical: WP('3'),
  },
  subTitle: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    marginRight: WP('4'),
  },
  lineStyle: {
    backgroundColor: colors.p5,
    marginVertical: WP('2'),
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
  },
});
