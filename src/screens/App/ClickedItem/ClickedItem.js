import React, {useRef, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AppBar,
  AppDivider,
  AppHeader,
  AppTitle,
  DistanceModal,
  FavouriteItemCard,
  FilterModal,
  SortSheet,
} from '../../../component';
import {appImages, colors} from '../../../utilities';

const ClickedItem = () => {
  const refRBSheet = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => setIsVisible(!isVisible);
  const props = {
    imgBg: colors.pc,
    imgName: appImages.sneakers,
  };
  const props2 = {
    imgBg: colors.g1,
    imgName: appImages.sneakers2,
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <AppHeader />
        <AppTitle
          Title="What’s Hot is Sneakers Right Now"
          mainContainer={styles.titleCon}
        />
        <AppBar
          onPressSort={() => refRBSheet.current.open()}
          onPressFilter={toggleModal}
        />

        <AppTitle Title="Shop by PAK Size" mainContainer={styles.titleCon} />
        <FavouriteItemCard {...props} />
        <AppDivider />
        <FavouriteItemCard {...props2} />
        <AppDivider />
        <FavouriteItemCard {...props} />
        <AppDivider />
        <FavouriteItemCard {...props2} />
        <AppDivider />
        <FavouriteItemCard {...props} />
        <AppDivider />
      </ScrollView>
      <FilterModal isModalVisible={isVisible} onPress={toggleModal} />
      {/* <DistanceModal isModalVisible={isVisible} onPress={toggleModal} /> */}

      <SortSheet refRBSheet={refRBSheet} />
    </SafeAreaView>
  );
};

export default ClickedItem;
