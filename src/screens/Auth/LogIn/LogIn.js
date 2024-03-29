import React, {useRef} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {
  AppButton,
  SocialButton,
  TaskInput,
  TopHeader,
} from '../../../component';
import {appIcons, loginFormFields, loginVS} from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setToken} from '../../../redux/Slices/authSlice';
import {setUserId} from '../../../redux/Slices/userSlice';

const LogIn = ({navigation}) => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const {user, loading, token} = useSelector(state => state.auth);
  const userId = user?.seller?._id;

  const handleLogin = values => {
    const email = values.email;
    const password = values.password;
    dispatch(setUserId(userId));
    // dispatch(setToken(user?.token));
    dispatch(loginUser({email, password}))
      .unwrap()
      .then(() => {
        navigation.navigate('HomeStack');
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={values => {
          handleLogin(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={loginVS}>
        {({values, errors, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView
            style={styles.main}
            enableOnAndroid
            contentContainerStyle={styles.contentContainer}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <TopHeader iconName={appIcons.backArrow} />
              <Text style={styles.titleText}>Login Now</Text>
              <Text style={styles.subTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Text>
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
                placeholder="********"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                errorMessage={errors.password}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
              <AppButton
                title="Log In"
                onPress={handleSubmit}
                loading={loading}
                disabled={loading}
              />
              <SocialButton />
              <Text style={styles.accountText}>
                Don’t have an account,
                <Text
                  style={styles.clickText}
                  onPress={() => navigation.navigate('SignUp')}>
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

export default LogIn;
