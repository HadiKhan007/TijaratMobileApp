import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const AppTitle = ({
  Title,
  secondTitle,
  titleStyle,
  subTextStyle,
  mainContainer,
  onPress,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <Text style={[styles.titleStyle, titleStyle]}>{Title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.subTextStyle, subTextStyle]}>{secondTitle}</Text>
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
    marginVertical: WP('6'),
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
});
