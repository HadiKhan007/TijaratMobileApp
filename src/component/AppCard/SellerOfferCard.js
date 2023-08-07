import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const SellerOfferCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
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
          <Text style={styles.titleStyle}>Buyer Offered:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Rs. 1,000</Text>
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
          <Text style={styles.titleStyle}>Counter Offer:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>------</Text>
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
          <Text style={styles.titleStyle}>Date:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>June 23, 2022 6:31 PM</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Action:</Text>
        </View>
        <View style={styles.column}>
          <Image source={appIcons.gEye} style={styles.iconStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {SellerOfferCard};

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
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
  },
});
