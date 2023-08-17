import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppLoader, AppTitle, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';
import OrdersTopTabs from '../../../../../navigation/stacks/TopTabs/OrdersTopTabs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOrderDetailsAsync} from '../../../../../redux/Slices/SellerSlices/orderDetailSlice';

const SOrderDetails = ({route}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.orderDetails?.loading);
  const orderID = route.params.orderID;

  useEffect(() => {
    dispatch(fetchOrderDetailsAsync(orderID));
  }, [dispatch, orderID]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Order Detail" />
        <AppTitle
          Title="Your Order Detail"
          mainContainer={styles.titleContainer}
        />
      </View>
      <OrdersTopTabs />
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SOrderDetails;
