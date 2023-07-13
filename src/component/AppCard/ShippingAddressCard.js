import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const ShippingAddressCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Name:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Hamza Basra</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Address:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>House 1 Lahore</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Email:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>hamzabasra@66loop.com</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Phone:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>923123456789</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>City:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Lahore</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Country:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Pakistan</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Zip:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>5400</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Delivery Status:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Received</Text>
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
