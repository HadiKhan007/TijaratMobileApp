import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, SellerOrderCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';
import {useDispatch, useSelector} from 'react-redux';
import {sellerOrdersAsync} from '../../../../redux/Slices/SellerSlices/SellerOrderSlice';

const SellerOrdersList = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth.user);
  const sellerOrder = useSelector(state => state.sellerOrder.orders);

  const sellerId = user?.seller?._id;
  console.log('====================================');
  console.log(sellerId);
  console.log('====================================');
  useEffect(() => {
    dispatch(sellerOrdersAsync(sellerId));
  }, [dispatch, sellerId]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Orders" />
        <AppTitle Title="Order" mainContainer={styles.titleContainer} />
        <SellerOrderCard
          sellerOrderData={sellerOrder}
          onPress={() => navigation.navigate('SOrderDetails')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SellerOrdersList;
