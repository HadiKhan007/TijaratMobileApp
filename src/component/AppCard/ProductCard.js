import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ProductCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Product Name:</Text>
        <Text style={styles.secondText}>
          House number, house name, streat name, city/town, country name...
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Category:</Text>
        <Text style={styles.secondText}>Electronic </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Price:</Text>
        <Text style={styles.secondText}>Rs 150.00</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Stock:</Text>
        <Text style={styles.secondText}>3</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>Status:</Text>
        <Text style={styles.secondText}>3</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.rowContainer}>
          <Image
            source={appIcons.cloneIcone}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.cloneStyle}>Clone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rowContainer, {marginLeft: WP('38')}]}>
          <Image
            source={appIcons.editIcon}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.cloneStyle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rowContainer, {marginLeft: WP('3')}]}>
          <Text style={[styles.cloneStyle, {textDecorationLine: 'underline'}]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {ProductCard};

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
    alignItems: 'flex-start',
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
  },
  cloneStyle: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('2'),
  },
});
