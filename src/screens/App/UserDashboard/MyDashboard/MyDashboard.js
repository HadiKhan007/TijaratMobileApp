import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TopHeader,
} from '../../../../component';
import {appIcons, appImages, colors} from '../../../../utilities';
import styles from './styles';

const MyDashboard = ({navigation}) => {
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
        <AppTitle Title="My Dashboard" mainContainer={styles.titleContainer} />
        <Text style={styles.textStyle}>
          Hello, <Text style={styles.titleStyle}>Hamza Basra</Text> !{'\n'}From
          your My Account Dashboard you have the ability to view a snapshot of
          your recent account activity and update your account information.
          Select a link below to view or edit information...
        </Text>
        <View style={styles.rowContainer}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Edit"
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

export default MyDashboard;
