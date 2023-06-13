import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';
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
  return (
    <SafeAreaView style={styles.rootContainer}>
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
        <OfferCard />
        <OfferCard />
      </View>
    </SafeAreaView>
  );
};

export default Uoffers;
