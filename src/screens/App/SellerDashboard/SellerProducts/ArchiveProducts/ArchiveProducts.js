import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ArchiveCard, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';
import {useDispatch, useSelector} from 'react-redux';
import {archiveProductNew} from '../../../../../redux/Slices/SellerSlices/ArchiveProductSlice';

const ArchiveProducts = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.archive);
  console.log('Archive===>,', user._id);
  dispatch(archiveProductNew(user._id));

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
