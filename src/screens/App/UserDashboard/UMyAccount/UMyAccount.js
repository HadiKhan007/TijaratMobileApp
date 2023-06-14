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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UMyAccount = ({navigation}) => {
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
          <AppTitle Title="My Account" mainContainer={styles.titleContainer} />
          <TaskInput
            title="Full Name"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Hamza Habib Basra"
            placeholderTextColor={colors.p2}
            editable={false}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
          />
          <TaskInput
            title="Email"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="example123@gmail.com"
            placeholderTextColor={colors.p2}
            editable={false}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
            keyboardType={'email-address'}
          />
          <TaskInput
            title="Phone No"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="+923000000000"
            placeholderTextColor={colors.p2}
            editable={false}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
            keyboardType={'email-address'}
          />
          <TaskInput
            title="Address"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="House1 Lahore sewqd, Lahore, Pakistan"
            placeholderTextColor={colors.p2}
            editable={false}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
            keyboardType={'email-address'}
          />
          <TaskInput
            title="Zipp Code"
            titleStyle={styles.titleStyle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Zipp Code"
            placeholderTextColor={colors.p2}
            editable={false}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}x
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UMyAccount;
