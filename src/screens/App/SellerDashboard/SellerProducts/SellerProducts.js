import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ProductCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';

const SellerProducts = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Seller Dashboard" />
        <AppTitle
          Title="All Products"
          secondTitle="Archive Product"
          subTextStyle={styles.subTextStyle}
          mainContainer={styles.titleContainer}
          onPress={() => navigation.navigate('ArchiveProducts')}
        />
        <ProductCard />
        <ProductCard />
      </View>
    </SafeAreaView>
  );
};

export default SellerProducts;
