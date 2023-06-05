import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ProfileCard = ({title, email, iconName}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={appIcons.person} style={styles.iconStyle} />
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.mailStyle}>{email}</Text>
      </View>
    </View>
  );
};

export {ProfileCard};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: WP('5'),
    marginTop: WP('5'),
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
    marginRight: WP('4'),
    alignSelf: 'center',
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
  },
  mailStyle: {
    color: colors.p2,
    fontFamily: family.workSans_light,
    fontSize: size.small,
  },
});