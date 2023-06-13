import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const OfferCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Seller:</Text>
        <Text style={styles.secondText}>Hamza </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Itmes:</Text>
        <Text style={styles.secondText}>Fashion Shoes </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Buyer Offered:</Text>
        <Text style={styles.secondText}>Rs 1000</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Quantity::</Text>
        <Text style={styles.secondText}>1</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Seller Offered:</Text>
        <Text style={styles.secondText}>950</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Status:</Text>
        <Text style={styles.secondText}>Counter Offer By Seller</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Date:</Text>
        <Text style={styles.secondText}>October 19, 2022</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.rowContainer}>
          <Image
            source={appIcons.closeeye}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.cloneStyle}>Action</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {OfferCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w2,
    paddingHorizontal: WP('6'),
    borderBottomColor: colors.p6,
    borderBottomWidth: 2,
    paddingVertical: WP('2'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: WP('1'),
    alignItems: 'center',
  },
  secondText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    marginLeft: WP('3'),
    flexWrap: 'wrap',
    flex: 1,
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
    tintColor: colors.p1,
  },
  cloneStyle: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('2'),
  },
});
