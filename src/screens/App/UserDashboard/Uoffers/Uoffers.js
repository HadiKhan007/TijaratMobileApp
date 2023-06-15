/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import {
  AccountCard,
  AppTitle,
  OfferCard,
  TopHeader,
} from '../../../../component';
import styles from './styles';
import {colors} from 'react-native-elements';
import {appIcons, appImages} from '../../../../utilities';

const Uoffers = ({navigation}) => {
  const props = {
    heading1: 'Seller:',
    subHeading1: 'Hamza Basra Habib',
    heading2: 'Items:',
    subHeading2: 'Fashion Shoes',
    heading3: 'Buyer Offered:',
    subHeading3: 'Rs 1000',
    heading4: 'Quantity:',
    subHeading4: '01',
    heading5: 'Seller Offered:',
    subHeading5: 'Rs 950',
    heading6: 'Status:',
    subHeading6: 'Counter Offer By Seller',
    heading7: 'Date:',
    subHeading7: 'October 19, 2022',

    iconName: true,
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.imgContainer}>
          <ImageBackground
            style={styles.mainContainer}
            source={appImages.curveImg}
            resizeMode="cover">
            <TopHeader
              iconName={appIcons.backArrow}
              title="User Dashboard"
              titleStyle={{color: colors.w1}}
              iconContainer={{colors: colors.p2}}
            />
            <AccountCard
              iconName={appIcons.person}
              title="Hamza Habib"
              email="Madison, United State..."
              titleStyle={{color: colors.w1}}
              mailStyle={{color: colors.w1}}
              iconStyle={styles.iconStyle}
              mainContainer={{marginTop: 40}}
            />
          </ImageBackground>
        </View>
        <View style={styles.secondContainer}>
          <AppTitle Title="My Offers" />
          <OfferCard {...props} />
          <OfferCard {...props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Uoffers;
