import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const FavouriteItemCard = ({...props}) => {
  const {imgBg, imgName} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={[styles.imgContainer, {backgroundColor: imgBg}]}>
          <Image
            source={imgName}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.secondCon}>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you buy from real person.
          </Text>
          <View style={styles.secondRow}>
            <Text style={styles.brandText}>Brand New</Text>
            <Image
              source={appIcons.fillHeart}
              style={styles.iconStyle}
              resizeMode="center"
            />
          </View>
          <Text style={styles.priceText}>
            Rs <Text style={styles.numText}>14,000.00</Text>
          </Text>
          <Text style={styles.detailText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting...
          </Text>
        </View>
      </View>
    </View>
  );
};

export {FavouriteItemCard};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: WP('5'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondCon: {
    marginLeft: WP('2'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('33'),
    height: WP('30'),
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
    fontFamily: family.workSans_bold,
    fontSize: size.normal,
    width: WP('58'),
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
  },
  removeText: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginLeft: WP('3'),
  },
  detailText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.tiny,
    width: WP('58'),
  },
});
