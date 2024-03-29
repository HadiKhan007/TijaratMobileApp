import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, family, size, WP} from '../../utilities';
import {hasNotch} from 'react-native-device-info';

const DrawerBar = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.innerContainer}>
        <Image source={item?.leftIcon} style={styles.leftIconStyle} />
        <Text style={styles.textStyle}>{item?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: WP('2'),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
  },
  textStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.large,
    marginLeft: hasNotch() ? WP('3') : WP('1.5'),
    width: '85%',
    marginTop: -WP('0.5'),
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    tintColor: colors.white,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginVertical: WP('1'),
  },
  leftIconStyle: {
    width: WP('5'),
    height: WP('5'),
    tintColor: colors.white,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: WP('0.5'),
  },
});

export {DrawerBar};
