import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, appImages, colors, family, size} from '../../utilities';

const WishCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={appImages.sneakers}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.secondCon}>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you buy from real person.
          </Text>
          <Text style={styles.brandText}>Brand New</Text>
          <Text style={styles.priceText}>
            Rs <Text style={styles.numText}>14,000.00</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.rowContainer, {marginVertical: WP('2')}]}>
        <Text style={styles.availText}>Avaliable</Text>
        <View style={[styles.rowContainer, {marginLeft: WP('30')}]}>
          <Image
            source={appIcons.cart}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.cartText}>Ad to Cart</Text>
        </View>
        <Text style={styles.removeText}>Remove</Text>
      </View>
    </View>
  );
};

export {WishCard};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: WP('5'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  secondCon: {
    marginLeft: WP('2'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('30'),
    height: WP('22'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: WP('22'),
    height: WP('22'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    width: WP('60'),
  },
  brandText: {
    color: colors.gr,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  priceText: {
    color: colors.p3,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  numText: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
  },
  availText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
  },
  cartText: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('1'),
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    tintColor: colors.p4,
    alignSelf: 'center',
  },
  removeText: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('3'),
  },
});
