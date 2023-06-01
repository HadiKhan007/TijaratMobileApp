import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {WP, appIcons, colors} from '../../utilities';

const AppHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.leftContainer}>
        <Image
          source={appIcons.menuIcon}
          style={styles.leftIcon}
          resizeMode="center"
        />
      </TouchableOpacity>
      <Image
        source={appIcons.tijaratIcon}
        style={styles.centerIcon}
        resizeMode="contain"
      />
      <View style={styles.rigthContainer}>
        <Image
          source={appIcons.category}
          style={styles.leftIcon}
          resizeMode="center"
        />
        <View style={styles.countContainer}>
          <Text>0</Text>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: WP('3'),
  },
  leftIcon: {
    width: WP('6'),
    height: WP('6'),
  },
  leftContainer: {
    backgroundColor: 'red',
    width: WP('10'),
    height: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('5'),
  },
  centerIcon: {
    width: WP('20'),
    height: WP('10'),
  },
  countContainer: {
    backgroundColor: colors.gr,
    padding: WP('1'),
    borderRadius: WP('5'),
    position: 'absolute',
    top: -WP('4'),
    right: -5,
  },
  rigthContainer: {},
});
