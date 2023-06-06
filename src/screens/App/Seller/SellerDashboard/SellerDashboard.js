import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {ProfileCard, ResultCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';

const SellerDashboard = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.menuIcon} title="Seller Dashboard" />
        <ProfileCard
          email="hamza1@gmail.com"
          title="Hamza Habib"
          iconName={appIcons.person}
        />
        <ResultCard />
      </View>
    </SafeAreaView>
  );
};

export default SellerDashboard;
