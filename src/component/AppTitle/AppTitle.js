import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AppTitle = ({
  Title,
  secondTitle,
  titleStyle,
  subTextStyle,
  mainContainer,
  onPress,
  iconName,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <Text style={[styles.titleStyle, titleStyle]}>{Title}</Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rownContainer}>
          {iconName && (
            <Image
              source={iconName}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          )}
          <Text style={[styles.subTextStyle, subTextStyle]}>{secondTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {AppTitle};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP('4'),
    marginVertical: WP('5'),
  },
  titleStyle: {
    color: colors.p1,
    fontSize: size.large,
    fontFamily: family.workSans_bold,
  },
  subTextStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    textDecorationLine: 'underline',
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    marginHorizontal: WP('2'),
  },
  rownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
