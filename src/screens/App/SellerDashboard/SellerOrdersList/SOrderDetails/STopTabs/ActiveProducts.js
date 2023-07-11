import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../../../../../utilities';
import {
  ActiveProductCard,
  AppTitle,
  OrderSummaryCard,
  SummaryCard,
} from '../../../../../../component';

const ActiveProducts = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <ActiveProductCard />
        <Text style={styles.textStyle}>
          <Text style={styles.noteStyle}>Note:</Text> After receiving the order,
          you have 24 hours to ship the order and enter tracking information and
          change the order to shipped
        </Text>
        <AppTitle Title="Summary" style={styles.titleContainer} />
        <OrderSummaryCard />
        <Text style={styles.cancleStyle}>
          <Text style={styles.noteStyle}>Note:</Text> Buyer can cancel the order
          within 30 minutes of placing the order
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveProducts;

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
  noteStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
    lineHeight: WP('5'),
  },
  cancleStyle: {
    color: colors.r1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
});
