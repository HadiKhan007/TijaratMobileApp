import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ArchiveCard, TopHeader} from '../../../../../component';
import {appIcons} from '../../../../../utilities';

const ArchiveProducts = () => {
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
