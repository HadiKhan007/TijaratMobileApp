import React, {useRef} from 'react';
import {View, SafeAreaView, ImageBackground, Alert} from 'react-native';
import styles from './styles';
import {
  appIcons,
  appImages,
  colors,
  updatePassFormFields,
  updatePassVS,
} from '../../../../utilities';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TaskInput,
  TopHeader,
} from '../../../../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../../../redux/Slices/authSlice';

const UChangePassword = ({navigation}) => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const {loading, user} = useSelector(state => state.auth);
  const handleChangePass = values => {
    // const currentPassword = values.currentPassword;
    // const newPassword = values.newPassword;
    // dispatch(changePassword(currentPassword, newPassword, user.token))
    //   .unwrap()
    //   .then(() => {
    //     // navigation.navigate('HomeStack');
    //   })
    //   .catch(err => {
    //     Alert.alert('Error', err.message);
    //   });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={updatePassFormFields}
        onSubmit={values => {
          handleChangePass(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={updatePassVS}>
        {({values, errors, handleSubmit, handleChange}) => (
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
                Title="My Password"
                mainContainer={styles.titleContainer}
              />
              <TaskInput
                title="Password"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="**********"
                value={values.currentPassword}
                onChangeText={handleChange('currentPassword')}
                errorMessage={errors.currentPassword}
              />
              <TaskInput
                title="Enter New Password"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Your Password"
                value={values.newPassword}
                onChangeText={handleChange('newPassword')}
                errorMessage={errors.newPassword}
              />
              <TaskInput
                title="Comfort Password"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Your Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                errorMessage={errors.confirmPassword}
              />
              <View style={styles.rowContainer}>
                <AppButton
                  containerStyle={styles.btnStyle}
                  title="Update"
                  onPress={handleSubmit}
                  loading={loading}
                  disabled={loading}
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
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default UChangePassword;
