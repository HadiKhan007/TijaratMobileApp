import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TaskInput,
  TopHeader,
} from '../../../../component';
import styles from './styles';
import {appIcons, appImages, colors} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UDeactiveAccount = ({navigation}) => {
  return (
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
        <AppTitle
          Title="Deactivate Account"
          mainContainer={styles.titleContainer}
        />
        <Text style={styles.textStyle}>
          To cancel your account please confirm your Email and Password Again
        </Text>
        <TaskInput
          title="Password"
          titleStyle={styles.titleStyle}
          placeholderTextColor={colors.p2}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="**********"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}x
        />
        <TaskInput
          title="Short Details"
          placeholder="Details of Product"
          placeholderTextColor={colors.p2}
          titleStyle={styles.inputTitle}
          maxLength={300}
          multiline={true}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <View style={styles.rowContainer}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Deactivate"
            titleStyle={styles.btnTitle}
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
  );
};

export default UDeactiveAccount;
