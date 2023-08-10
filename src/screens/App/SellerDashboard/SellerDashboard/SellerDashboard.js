import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AccountCard,
  AppLoader,
  OrderCard,
  ResultCard,
  TopHeader,
} from '../../../../component';
import {BASE_URL_IMG, appIcons, colors} from '../../../../utilities';
import {FloatingAction} from 'react-native-floating-action';
import {DrawerActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {productdata} from '../../../../redux/Slices/SellerSlices/dashboardSlice';
import {recentOrdersAsync} from '../../../../redux/Slices/SellerSlices/RecentOrderSlice';

const SellerDashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state?.auth);
  const data = useSelector(state => state?.dashboard?.data);
  const recentOrder = useSelector(state => state?.recentOrder?.orders);
  const loading = useSelector(state => state?.recentOrder?.loading);

  const sellerId = user?.user?.seller?._id;
  const newData = data?.data;

  useEffect(() => {
    dispatch(productdata(sellerId));
    dispatch(recentOrdersAsync(sellerId));
  }, [dispatch, sellerId]);

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
            imageURL={BASE_URL_IMG + user?.user?.seller?.shopImageUrl}
            title={
              user
                ? user?.user?.seller?.firstName +
                  ' ' +
                  user?.user?.seller?.lastName
                : 'Login Now'
            }
            email={user ? user?.user?.seller?.email : 'no'}
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
          <OrderCard recentOrderData={recentOrder} />
          {/* <OrderCard recentOrderData={recentOrder} /> */}
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
        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default SellerDashboard;
