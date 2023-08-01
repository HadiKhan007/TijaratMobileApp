import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AccountCard,
  OrderCard,
  ResultCard,
  TopHeader,
} from '../../../../component';
import {appIcons, colors} from '../../../../utilities';
import {FloatingAction} from 'react-native-floating-action';
import {DrawerActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {productdata} from '../../../../redux/Slices/SellerSlices/dashboardSlice';
import {setUserId} from '../../../../redux/Slices/userSlice';
import {
  fetchOrders,
  recentOrderData,
} from '../../../../redux/Slices/SellerSlices/RecentOrderSlice';

const SellerDashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth.user);
  const {data} = useSelector(state => state.dashboard);
  const {orders, status, error} = useSelector(state => state.orders);
  const userId = user.seller._id;

  console.log('====================================');
  console.log('ordersNew--->', orders);
  console.log('====================================');

  // const ProductDetails = orders[0].orders[0].product.shortDetails;
  // const orderID = orders[0].masterOrderNumber;
  // const orderStatus = orders[0].overAllOrderStatus;

  const newData = data.data;
  useEffect(() => {
    dispatch(productdata(userId));
    dispatch(setUserId(userId));
    dispatch(fetchOrders(userId));
  }, [dispatch, userId]);

  const actions = [
    {
      text: 'Offers',
      icon: appIcons.Soffer,
      name: 'SOffers',
      position: 1,
      color: colors.p1,
    },
    {
      text: 'Profile',
      icon: appIcons.person,
      name: 'SellerProfile',
      position: 2,
      color: colors.p1,
    },
    {
      text: 'Payment Method',
      icon: appIcons.payment,
      name: 'SellerPayment',
      position: 3,
      color: colors.p1,
    },
    {
      text: 'Shipping Rules',
      icon: appIcons.payment,
      name: 'ShippingRules',
      position: 4,
      color: colors.p1,
    },
  ];
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <TopHeader
            iconName={appIcons.menuIcon}
            title="Seller Dashboard"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <AccountCard
            iconName={user ? user.seller.shopImageUrl : appIcons.person}
            title={
              user
                ? user.seller.firstName + ' ' + user.seller.lastName
                : 'Login Now'
            }
            email={user ? user.seller.email : 'no'}
          />
          <View style={{flexDirection: 'row'}}>
            <ResultCard
              iconName={appIcons.promotion}
              title="Total Sale"
              number={newData?.totalPriceOfOrder}
            />
            <ResultCard
              iconName={appIcons.earn}
              title="Total Products"
              number={newData?.products}
            />
            <ResultCard
              iconName={appIcons.promotion}
              title="Total Order"
              number={newData?.orders}
            />
          </View>
          <OrderCard />
          <OrderCard />
        </ScrollView>

        {/* <View style={styles.positionCon}> */}
        <FloatingAction
          shadow={true}
          color={colors.p1}
          position="right"
          actions={actions}
          onPressItem={name => navigation.navigate(`${name}`)}
        />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default SellerDashboard;
