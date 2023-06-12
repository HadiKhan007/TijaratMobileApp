import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AccountCard = ({
  title,
  email,
  iconName,
  titleStyle,
  mailStyle,
  iconStyle,
  mainContainer,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <Image
        source={iconName ? iconName : appIcons.person}
        style={[styles.iconStyle, iconStyle]}
      />
      <View>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        <Text style={[(styles.mailStyle, mailStyle)]}>{email}</Text>
      </View>
    </View>
  );
};

export {AccountCard};

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
