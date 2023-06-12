import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ProductCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';

const SellerProducts = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Seller Dashboard" />
      </View>
      <AppTitle
        Title="All Products"
        secondTitle="Add Product"
        subTextStyle={styles.subTextStyle}
      />
      <ProductCard />
      <ProductCard />
    </SafeAreaView>
  );
};

export default SellerProducts;
