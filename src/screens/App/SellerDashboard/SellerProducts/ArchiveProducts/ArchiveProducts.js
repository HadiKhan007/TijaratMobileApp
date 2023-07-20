import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ArchiveCard, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';
import {useDispatch, useSelector} from 'react-redux';
import {archiveProductAsync} from '../../../../../redux/Slices/SellerSlices/ArchiveProductSlice';

const ArchiveProducts = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const userId = useSelector(state => state.userId);
  const archivedProducts = useSelector(
    state => state.archiveProduct.archivedProducts,
  );
  console.log('archivedProducts--->', archivedProducts);

  console.log('====================================');
  console.log('sellerId--->', userId.userId);
  console.log('====================================');
  dispatch(archiveProductAsync(userId));

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Archive Products" />
        <AppTitle
          Title="Archive Products"
          mainContainer={styles.titleContainer}
        />
        <ArchiveCard />
        <ArchiveCard />
        <ArchiveCard />
      </View>
    </SafeAreaView>
  );
};

export default ArchiveProducts;
