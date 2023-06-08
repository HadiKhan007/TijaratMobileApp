import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppTitle, TopHeader} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';

const SellerPayment = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Payment" />
        <AppTitle
          Title="Current Payment Methods"
          mainContainer={styles.titleCon}
        />
      </View>
    </SafeAreaView>
  );
};

export default SellerPayment;
