import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {AppTitle, ArchiveCard, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';
import {useDispatch, useSelector} from 'react-redux';
import {archiveProductAsync} from '../../../../../redux/Slices/SellerSlices/ArchiveProductSlice';

const ArchiveProducts = () => {
  const dispatch = useDispatch();
  const archiveProducts = useSelector(
    state => state.archiveProducts.archivedProducts,
  );
  const {user} = useSelector(state => state.auth.user);
  const sellerId = user?.seller?._id;

  useEffect(() => {
    dispatch(archiveProductAsync(sellerId));
  }, [dispatch, sellerId]);
  const renderItem = ({item, index}) => (
    <ArchiveCard item={index} data={archiveProducts} />
  );

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Archive Products" />
        <AppTitle
          Title="Archive Products"
          mainContainer={styles.titleContainer}
        />
        <FlatList data={archiveProducts[0]?.data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default ArchiveProducts;
