import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AboutSellerCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>About this seller:</Text>
      <View style={styles.rowContainer}>
        <Image source={appIcons.person} style={[styles.iconStyle]} />
        <View>
          <Text style={styles.dugStyle}>Dugg.14(52)</Text>
          <Text style={styles.reviewText}>100% postive reviews</Text>
          <TouchableOpacity style={styles.rowContainer}>
            <Image
              source={appIcons.emptyHeart}
              style={styles.heartStyle}
              resizeMode="contain"
            />
            <Text style={[styles.textStyle, {marginLeft: WP('1')}]}>
              Save this search
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={appIcons.forwardArrow}
          style={[styles.iconStyle]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export {AboutSellerCard};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.6},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.w2,
    padding: WP('2'),
  },
  titleStyle: {
    color: colors.b1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
    marginRight: WP('4'),
    alignSelf: 'center',
  },
  dugStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
  reviewText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
    marginVertical: WP('1'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  heartStyle: {
    width: WP('4'),
    height: WP('4'),
    tintColor: colors.p1,
  },
});
