import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const CategoryCard = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgCon}>
        <Image
          source={item?.iconName}
          style={[styles.iconStyle]}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.titleStyle]}>{item?.title}</Text>
    </View>
  );
};

export {CategoryCard};

const styles = StyleSheet.create({
  mainContainer: {
    width: '48%',
    height: WP('40'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('5'),
  },
  imgCon: {
    backgroundColor: colors.w2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: WP('30'),
    borderRadius: 10,
  },
  iconStyle: {
    width: WP('16'),
    height: WP('16'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
    marginTop: WP('2'),
  },
});
