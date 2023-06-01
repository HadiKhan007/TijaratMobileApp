import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {WP, appIcons, colors} from '../../utilities';

const SearchItem = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.p2}
        style={styles.inputStyle}
      />
      <Image
        source={appIcons.search}
        style={styles.iconStyle}
        resizeMode="contain"
      />
    </View>
  );
};

export {SearchItem};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.g1,
    padding: WP('3'),
    marginTop: WP('5'),
    borderRadius: WP('5'),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WP('4'),
  },
  iconStyle: {
    width: WP('5'),
    height: WP('5'),
    marginRight: WP('2'),
  },
  inputStyle: {
    height: WP('3'),
    width: '70%',
  },
});
