import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WP, appIcons, colors, family, size} from '../../utilities';

const SocialButton = () => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image source={appIcons.google} style={styles.iconStyle} />
      <Text style={styles.textStyle}>Register with Google</Text>
    </TouchableOpacity>
  );
};

export {SocialButton};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.p4,
    padding: WP('1.5'),
    borderRadius: 100,
    marginVertical: WP('3'),
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
    marginHorizontal: WP('2'),
  },
  textStyle: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
  },
});
