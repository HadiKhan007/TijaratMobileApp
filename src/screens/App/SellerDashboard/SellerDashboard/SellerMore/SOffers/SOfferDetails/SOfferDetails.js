import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {AppLoader, AppTitle, TopHeader} from '../../../../../../../component';
import {appIcons} from '../../../../../../../utilities';
import OfferDetailCard from '../../../../../../../component/AppCard/OfferDetailCard';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOfferDetailsAsync} from '../../../../../../../redux/Slices/SellerSlices/OfferDetailSlice';

const SOfferDetails = ({route}) => {
  const dispatch = useDispatch();
  const offerId = route?.params?.offerId;
  const offerDetails = useSelector(state => state.offerDetails.offerDetails);
  const loading = useSelector(state => state.offerDetails.loading);
  const data = offerDetails;

  useEffect(() => {
    dispatch(fetchOfferDetailsAsync(offerId));
  }, [dispatch, offerId]);
  const renderItem = ({item, index}) => (
    <OfferDetailCard detailData={offerDetails} />
  );
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Offer Details" iconName={appIcons.backArrow} />
        <AppTitle
          Title="Your Offer Details"
          mainContainer={styles.titleContainer}
        />
        <FlatList
          data={[offerDetails]}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />

        <AppLoader loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default SOfferDetails;
