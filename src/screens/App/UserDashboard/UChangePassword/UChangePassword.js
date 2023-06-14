import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import {appIcons, appImages, colors} from '../../../../utilities';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TaskInput,
  TopHeader,
} from '../../../../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UChangePassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView
        style={styles.main}
        enableOnAndroid
        contentContainerStyle={styles.contentContainer}
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}>
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
          <TaskInput
            title="Password"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="**********"
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
          />
          <TaskInput
            title="Enter New Password"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Enter Your Password"
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
          />
          <TaskInput
            title="Comfort Password"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Enter Your Password"
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UChangePassword;
