import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appImages, colors, family, size} from '../../utilities';

const ItemCard = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={item?.imageName}
        style={styles.imgStyle}
        resizeMode="contain"
      />
      <Text style={styles.textStyle}>{item?.text}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item?.price}</Text>
        <Text style={styles.discountText}>{item?.discount}</Text>
      </View>
    </View>
  );
};

export {ItemCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    paddingVertical: WP('3'),
    paddingHorizontal: WP('3'),
    width: '30%',
    height: WP('70'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    margin: WP('2'),
    marginLeft: WP('4'),
  },
  imgStyle: {
    width: WP('30'),
    height: WP('30'),
  },
  textStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.large,
  },
  discountText: {
    color: colors.gr1,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
  },
});
