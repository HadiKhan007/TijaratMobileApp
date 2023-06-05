import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';
import {useNavigation} from '@react-navigation/native';

const TopHeader = ({iconName, iconStyle, title, titleStyle}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={iconName}
          style={[styles.iconStyle, iconStyle]}
          resizeMode="center"
        />
      </TouchableOpacity>
      {title ? <Text style={styles.titleStyle}>{title}</Text> : <View />}
      <View />
    </View>
  );
};

export {TopHeader};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: colors.g1,
    borderRadius: WP('4'),
    width: WP('8'),
    height: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_bold,
    fontSize: size.medium,
  },
});
