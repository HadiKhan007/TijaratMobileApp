import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {TopHeader} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';

const SellerProfile = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Profile" />
      </View>
    </SafeAreaView>
  );
};

export default SellerProfile;
