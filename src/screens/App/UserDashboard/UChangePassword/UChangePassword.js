import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import {appIcons, appImages, colors} from '../../../../utilities';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TopHeader,
} from '../../../../component';

const UChangePassword = ({navigation}) => {
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
        <AppTitle Title="My Password" mainContainer={styles.titleContainer} />

        <View style={styles.rowContainer}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Update"
            onPress={() => navigation.navigate('UMyAccount')}
          />
          <AppButton
            containerStyle={styles.btn2Style}
            title="Back"
            titleStyle={styles.btn2Title}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UChangePassword;
