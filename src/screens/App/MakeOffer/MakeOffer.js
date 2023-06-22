import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  TextWithInput,
  TopHeader,
  WishCard,
} from '../../../component';
import {appIcons} from '../../../utilities';

const MakeOffer = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Make an Offer" iconName={appIcons.backArrow} />
        <WishCard />
        <TextWithInput title="Quantity:" countVal />
        <TextWithInput title="Offered price:" value="Rs. 2000" />
        <TextWithInput title="Total price:" value="Rs. 2000" />
      </View>
      <View style={styles.bottomCon}>
        <AppButton title="Submit Offer" />
        <AppButton
          title="Continue Shopping"
          containerStyle={styles.btnStyle}
          titleStyle={styles.btnText}
        />
      </View>
    </SafeAreaView>
  );
};

export default MakeOffer;
