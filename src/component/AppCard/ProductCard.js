import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ProductCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <Text style={styles.titleStyle}>Product Name:</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.secondText}>
            House number, house name, streat name, city/town, country name...
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <Text style={styles.titleStyle}>Category:</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.secondText}>Electronic </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <Text style={styles.titleStyle}>Price:</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.secondText}>Rs 150.00</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <Text style={styles.titleStyle}>Stock:</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.secondText}>3</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <Text style={styles.titleStyle}>Status:</Text>
        </View>
        <View style={styles.column2}>
          <Text style={styles.secondText}>3</Text>
        </View>
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
        <TouchableOpacity style={[styles.rowContainer, {marginLeft: WP('1')}]}>
          <Text
            style={[
              styles.cloneStyle,
              {color: colors.r1, textDecorationLine: 'underline'},
            ]}>
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
    backgroundColor: colors.w1,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
    marginVertical: WP('2'),
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
    flexWrap: 'wrap',
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
  },
  cloneStyle: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('1'),
  },
  column1: {
    flex: 0.4,
  },
  column2: {
    flex: 0.6,
  },
});
