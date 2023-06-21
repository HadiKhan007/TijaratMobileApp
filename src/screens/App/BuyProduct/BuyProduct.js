import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AboutSellerCard, AppHeader, AppTitle} from '../../../component';

const BuyProduct = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <AppHeader />
        <Text style={styles.priceText}>
          Rs <Text style={styles.numText}>14,000.00</Text>
        </Text>
        <AppTitle
          Title="Brilliant things happen, When you buy from real person."
          mainContainer={styles.titleCon}
        />
        <AboutSellerCard />
      </View>
    </SafeAreaView>
  );
};

export default BuyProduct;
