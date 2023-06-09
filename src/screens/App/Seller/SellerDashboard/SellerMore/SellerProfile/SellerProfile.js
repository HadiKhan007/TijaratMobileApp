import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, ProfileCard, TopHeader} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';

const SellerProfile = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Profile" />
        <AppTitle
          Title="My Profile"
          mainContainer={styles.titleContainer}
          secondTitle="Edit"
          iconName={appIcons.editIcon}
        />
        <ProfileCard />
      </View>
    </SafeAreaView>
  );
};

export default SellerProfile;
