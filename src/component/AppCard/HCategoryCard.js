import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const HCategoryCard = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={item?.iconName}
        style={styles.iconStyle}
        resizeMode="contain"
      />
      <Text style={styles.titleStyle}>{item?.title}</Text>
    </View>
  );
};

export {HCategoryCard};

const styles = StyleSheet.create({
  mainContainer: {
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('25'),
    marginHorizontal: WP('4'),
  },
  iconStyle: {
    width: WP('15'),
    height: WP('15'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    // alignSelf: 'center',
  },
});
