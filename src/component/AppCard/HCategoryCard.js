import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const HCategoryCard = ({iconName, title}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={iconName} style={styles.iconStyle} resizeMode="contain" />
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export {HCategoryCard};

const styles = StyleSheet.create({
  mainContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('17'),
    marginHorizontal: WP('4'),
    marginVertical: WP('3'),
  },
  iconStyle: {
    width: WP('20'),
    height: WP('15'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    // alignSelf: 'center',
  },
});
