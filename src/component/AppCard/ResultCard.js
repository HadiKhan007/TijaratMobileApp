import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ResultCard = ({iconName, title, number}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={iconName} style={styles.iconStyle} resizeMode="contain" />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.numStyle}>{number}</Text>
    </View>
  );
};

export {ResultCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    width: '31%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
    paddingLeft: WP('1.5'),
    paddingVertical: WP('1'),
    borderLeftColor: colors.gr,
    borderLeftWidth: WP('1.5'),
    marginRight: WP('3'),
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
    marginVertical: WP('2'),
  },
  titleStyle: {
    color: colors.gr,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
  numStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.xtiny,
  },
});
