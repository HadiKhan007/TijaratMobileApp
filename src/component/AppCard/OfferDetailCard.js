import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const OfferDetailCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Buyer Name:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>M. Adnan Akhtar</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Item:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Uta Spencer</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Price Offered from Buyer:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Rs. 1000</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Quantity:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>2</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Offer Status:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Offer Expired</Text>
        </View>
      </View>
    </View>
  );
};

export default OfferDetailCard;

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
    marginVertical: WP('2'),
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
