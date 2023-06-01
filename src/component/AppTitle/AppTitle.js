import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const AppTitle = ({Title}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{Title}</Text>
      <Text style={styles.subTextStyle}>Sell all</Text>
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
