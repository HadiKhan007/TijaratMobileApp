import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppDivider,
  AppHeader,
  TopHeader,
  WishCard,
} from '../../../component';
import {WP, appIcons} from '../../../utilities';

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Wishlist" iconName={appIcons.backArrow} />
        <WishCard />
        <AppDivider lineStyle={{marginVertical: WP('5')}} />
        <WishCard />
      </View>
      <AppButton title="Continue Shopping" containerStyle={styles.btnStyle} />
    </SafeAreaView>
  );
};

export default Wishlist;
