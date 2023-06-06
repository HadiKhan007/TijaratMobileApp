import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ResultCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={appIcons.promotion} style={styles.iconStyle} />
      <Text style={styles.titleStyle}>ResultCard</Text>
      <Text style={styles.numStyle}>12,34567</Text>
    </View>
  );
};

export {ResultCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    width: '35%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
    paddingLeft: WP('3'),
    paddingVertical: WP('2'),
    borderLeftColor: colors.gr,
    borderLeftWidth: 5,
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
    marginVertical: WP('2'),
  },
  titleStyle: {
    color: colors.gr,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
    marginVertical: WP('0.5'),
  },
  numStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
});
