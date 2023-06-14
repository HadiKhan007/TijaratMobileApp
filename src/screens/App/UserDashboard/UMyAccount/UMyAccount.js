import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TaskInput,
  TopHeader,
} from '../../../../component';
import {appIcons, appImages, colors} from '../../../../utilities';

const UMyAccount = ({navigation}) => {
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
        <AppTitle Title="My Account" mainContainer={styles.titleContainer} />
        <TaskInput
          title="Email"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="example123@gmail.com"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          keyboardType={'email-address'}
        />
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

export default UMyAccount;
