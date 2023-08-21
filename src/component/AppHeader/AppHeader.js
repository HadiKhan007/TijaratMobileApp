/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {WP, appIcons, colors, size} from '../../utilities';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const AppHeader = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={() =>
          user
            ? navigation.dispatch(DrawerActions.openDrawer())
            : Alert.alert('Please login with Seller Account')
        }>
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
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('AuthStack')}>
          <Image
            source={appIcons.profile}
            style={styles.rightIcon}
            resizeMode="center"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SellerRegisterStack')}>
          <Image
            source={appIcons.cart}
            style={styles.rightIcon}
            resizeMode="center"
          />
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>0</Text>
        </View>
      </View>
    </View>
  );
};

export {AppHeader};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    width: WP('5'),
    height: WP('5'),
  },
  rightIcon: {
    width: WP('6'),
    height: WP('6'),
    marginRight: WP('2'),
  },
  leftContainer: {
    backgroundColor: colors.g1,
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
    borderRadius: WP('2.5'),
    width: WP('5'),
    height: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -WP('3'),
    right: -WP('1'),
  },
  countText: {
    color: colors.w1,
    fontSize: size.xtiny,
  },
});
