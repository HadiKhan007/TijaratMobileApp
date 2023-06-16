import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {WishCard} from '../../../component';

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <WishCard />
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
