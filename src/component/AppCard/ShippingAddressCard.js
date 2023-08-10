import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const ShippingAddressCard = ({data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Name:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.firstName}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Address:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.address}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Email:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.email}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Phone:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.phone}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>City:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.city}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Country:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.country}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Zip:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.shippingInformation?.zip}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Delivery Status:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data?.order[0]?.orders[0]?.orderStatus}
          </Text>
        </View>
      </View>
    </View>
  );
};

export {ShippingAddressCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.6},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    padding: WP('3'),
    marginVertical: WP('3'),
  },
  column: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('1'),
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
