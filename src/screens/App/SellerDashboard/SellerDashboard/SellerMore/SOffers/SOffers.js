import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {
  AppLoader,
  AppTitle,
  SellerOfferCard,
  TopHeader,
} from '../../../../../../component';
import styles from './styles';
import {WP, appIcons} from '../../../../../../utilities';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffersAsync} from '../../../../../../redux/Slices/SellerSlices/SellerOfferSlice';

const SOffers = ({navigation}) => {
  const dispatch = useDispatch();
  const offers = useSelector(state => state?.offers);
  const loading = useSelector(state => state?.offers?.loading);
  const {user} = useSelector(state => state?.auth);
  const sellerId = user?.user?.seller?._id;
  const apiData = offers?.offers;

  useEffect(() => {
    async function fetchOffers() {
      try {
        await dispatch(fetchOffersAsync(sellerId));
      } catch (error) {
        console.error('Error fetching offers:', error.message);
      }
    }

    fetchOffers();
  }, [dispatch, sellerId]);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Offers" iconName={appIcons.backArrow} />
        <AppTitle Title="All Offers" mainContainer={styles.titleContainer} />
        <FlatList
          data={apiData}
          style={{marginBottom: WP('23')}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SellerOfferCard
              data={offers?.offers}
              index={index}
              onPress={() =>
                navigation.navigate('SOfferDetails', {
                  offerId: apiData[index]?._id,
                })
              }
            />
          )}
        />
      </View>
      <AppLoader loading={loading} />
    </SafeAreaView>
  );
};

export default SOffers;
