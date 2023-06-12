import React from 'react';
import {View, SafeAreaView, ImageBackground, Text} from 'react-native';
import styles from './styles';
import {AccountCard, TopHeader, UserDashboardCard} from '../../../../component';
import {appIcons, appImages, colors} from '../../../../utilities';

const UserDashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.mainContainer}
          source={appImages.curveImg}
          resizeMode="cover">
          <TopHeader
            iconName={appIcons.menuIcon}
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
        <UserDashboardCard navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default UserDashboard;
