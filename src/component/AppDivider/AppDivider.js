import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WP, colors} from '../../utilities';

const AppDivider = ({lineStyle}) => {
  return <View style={[styles.lineStyle, lineStyle]} />;
};

export {AppDivider};

const styles = StyleSheet.create({
  lineStyle: {
    height: 1,
    backgroundColor: colors.p5,
    width: '100%',
    marginVertical: WP('2'),
  },
});
