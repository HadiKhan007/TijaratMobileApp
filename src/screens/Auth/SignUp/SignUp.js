import React, {useRef} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {
  AppButton,
  SocialButton,
  TaskInput,
  TopHeader,
} from '../../../component';
import {appIcons, registerFormFields, registerVS} from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {signUpApi} from '../../../redux/API/authApi';
import {signUp} from '../../../redux/Slices/authSlice';

const SignUp = ({navigation}) => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  console.log('error---->', error);
  console.log('loading---->', loading);
  const handleSignUp = async values => {
    console.log('values===>>', values);
    const credentials = {
      firstName: values.fname,
      lastName: values.lname,
      password: values.password,
      email: values.email,
    };

    try {
      await dispatch(signUp(credentials));
      navigation.navigate('LogIn');
    } catch (err) {
      console.log('SignUp error:', err.message);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={registerFormFields}
        onSubmit={values => {
          handleSignUp(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={registerVS}>
        {({values, errors, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView
            style={styles.main}
            enableOnAndroid
            contentContainerStyle={styles.contentContainer}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <TopHeader iconName={appIcons.backArrow} />
              <Text style={styles.titleText}>SignUp Now</Text>
              <Text style={styles.subTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Text>
              <TaskInput
                title="First Name"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="First Name"
                value={values.fname}
                onChangeText={handleChange('fname')}
                errorMessage={errors.fname}
              />
              <TaskInput
                title="Last Name"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Last Name"
                value={values.lname}
                onChangeText={handleChange('lname')}
                errorMessage={errors.lname}
              />
              <TaskInput
                title="Email"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="example123@gmail.com"
                value={values.email}
                onChangeText={handleChange('email')}
                errorMessage={errors.email}
                keyboardType={'email-address'}
              />
              <TaskInput
                title="Password"
                placeholder="Min. 8 character"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                errorMessage={errors.password}
              />
              <AppButton
                title="Sign Up"
                containerStyle={styles.btnStyle}
                onPress={handleSubmit}
                loading={loading}
                disabled={loading}
              />
              <SocialButton />
              <Text style={styles.accountText}>
                Already have an account,
                <Text
                  style={styles.clickText}
                  onPress={() => navigation.navigate('LogIn')}>
                  {' '}
                  Click here
                </Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
