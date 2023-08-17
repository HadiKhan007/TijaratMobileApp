import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {WP, colors, family, size} from '../../../../../../utilities';
import {
  AppLoader,
  AppTitle,
  CustomDropdown,
  OrderSummaryCard,
  ShippingAddressCard,
  TaskInput,
} from '../../../../../../component';
import {useSelector} from 'react-redux';

const ShippingAddress = () => {
  const orderDetails = useSelector(state => state.orderDetails?.orderDetails);
  const loading = useSelector(state => state.orderDetails?.loading);
  const totalAmount = orderDetails?.order?.[0]?.orders[0]?.total;

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <ShippingAddressCard data={orderDetails} />
        <CustomDropdown items={[]} title="Delivery Status" />
        <CustomDropdown items={[]} title="Courier Service" />
        <TaskInput
          title="Tracking ID"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder={orderDetails?.order?.[0]?.orders[0]?.trackingId}
          placeholderTextColor={colors.p2}
          editable={false}
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <Text style={styles.textStyle}>
          <Text style={styles.noteStyle}>Note:</Text> After receiving the order,
          you have 24 hours to ship the order and enter tracking information and
          change the order to shipped
        </Text>
        <AppTitle Title="Summary" mainContainer={styles.titleContainer} />
        <OrderSummaryCard data={totalAmount} />
        <Text style={styles.cancleStyle}>
          <Text style={styles.noteStyle}>Note:</Text> Buyer can cancel the order
          within 30 minutes of placing the order
        </Text>
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddress;

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
    marginTop: WP('4'),
  },
  cancleStyle: {
    color: colors.r1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
});
