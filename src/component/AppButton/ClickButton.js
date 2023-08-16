import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ClickButton = ({title, secondIcon, selected, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.rowContainer}>
        <Image
          source={selected ? appIcons.click : appIcons.unClick}
          style={styles.iconStyle}
        />
        <Text
          style={[styles.textStyle, {color: selected ? colors.p3 : colors.p2}]}>
          {title}
        </Text>
      </View>
      {secondIcon && (
        <Image
          source={appIcons.forwardArrow}
          style={styles.secondIcon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export {ClickButton};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
  textStyle: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    marginHorizontal: WP('3'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  secondIcon: {
    width: WP('4'),
    height: WP('4'),
  },
});
