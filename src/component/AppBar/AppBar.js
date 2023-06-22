import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AppBar = ({onPressSort, onPressFilter, onPressSave}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.rowContainer} onPress={onPressSave}>
        <Image
          source={appIcons.emptyHeart}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Text style={[styles.textStyle, {marginLeft: WP('1')}]}>
          Save this search
        </Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={onPressSort}
          style={[styles.rowContainer, {marginLeft: WP('22')}]}>
          <Text style={[styles.textStyle, {marginRight: WP('1')}]}>Sort</Text>
          <Image
            source={appIcons.sort}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressFilter}
          style={[styles.rowContainer, {marginLeft: WP('4')}]}>
          <Text style={[styles.textStyle, {marginRight: WP('1')}]}>Filter</Text>
          <Image
            source={appIcons.filter}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AppBar};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    alignSelf: 'center',
  },
});
