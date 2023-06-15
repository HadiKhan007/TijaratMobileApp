/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const OfferCard = props => {
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    heading7,
    subHeading1,
    subHeading2,
    subHeading3,
    subHeading4,
    subHeading5,
    subHeading6,
    subHeading7,
    iconName,
  } = props;
  return (
    <View style={styles.mainContainer}>
      {heading1 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading1}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading1}</Text>
          </View>
        </View>
      )}
      {heading2 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading2}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading2}</Text>
          </View>
        </View>
      )}
      {heading3 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading3}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading3} </Text>
          </View>
        </View>
      )}
      {heading4 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading4}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading4} </Text>
          </View>
        </View>
      )}
      {heading5 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading5}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading5} </Text>
          </View>
        </View>
      )}
      {heading6 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading6}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading6} </Text>
          </View>
        </View>
      )}
      {heading7 && (
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>{heading7}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>{subHeading7} </Text>
          </View>
        </View>
      )}
      {iconName && (
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
      )}
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
    marginLeft: -WP('7'),
    alignSelf: 'flex-start',
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
