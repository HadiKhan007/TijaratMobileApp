import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {
  AppLoader,
  AppTitle,
  ProductCard,
  TopHeader,
} from '../../../../component';
import {appIcons} from '../../../../utilities';
import {useDispatch, useSelector} from 'react-redux';
import {sellerAllProductsAsync} from '../../../../redux/Slices/SellerSlices/sellerAllProductsSlice';
import {DrawerActions} from '@react-navigation/native';

const SellerProducts = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state?.auth);
  const sellerId = user?.user?.seller?._id;

  const sellerProducts = useSelector(
    state => state.sellerAllProducts?.sellerProducts,
  );
  const loading = useSelector(state => state.sellerAllProducts?.loading);

  useEffect(() => {
    dispatch(sellerAllProductsAsync(sellerId));
  }, [dispatch, sellerId]);
  const renderItem = ({item, index}) => (
    <ProductCard apiData={sellerProducts} index={index} />
  );
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader
          iconName={appIcons.menuIcon}
          title="Seller Dashboard"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <AppTitle
          Title="All Products"
          secondTitle="Archive Product"
          subTextStyle={styles.subTextStyle}
          mainContainer={styles.titleContainer}
          onPress={() => navigation.navigate('ArchiveProducts')}
        />
        <FlatList
          data={sellerProducts}
          renderItem={renderItem}
          style={styles.columnStyle}
        />
        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default SellerProducts;
