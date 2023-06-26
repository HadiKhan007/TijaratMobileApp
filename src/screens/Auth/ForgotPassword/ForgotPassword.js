import React, {useRef} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {AppButton, TaskInput, TopHeader} from '../../../component';
import {appIcons, forgotPass, forgotVS} from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {forgotPassword} from '../../../redux/Slices/authSlice';

const ForgotPassword = ({navigation}) => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const success = useSelector(state => state.auth.success);

  console.log('error---->', error);
  console.log('loading---->', loading);
  console.log('success---->', success);
  const handleForgot = async values => {
    console.log('Values--->', values);
    const credentials = {
      email: values.email,
    };
    try {
      loading;
      dispatch(forgotPassword(credentials));
      // navigation.navigate('LogIn');
    } catch (err) {
      console.log('SignUp error:', err.message);
    }
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={forgotPass}
        onSubmit={values => {
          handleForgot(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={forgotVS}>
        {({values, errors, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView
            style={styles.main}
            enableOnAndroid
            contentContainerStyle={styles.contentContainer}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <TopHeader iconName={appIcons.backArrow} />
              <Text style={styles.titleText}>Forgot Password</Text>
              <Text style={styles.subTitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Text>
              <TaskInput
                title="Enter Email"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="example123@gmail.com"
                value={values.email}
                onChangeText={handleChange('email')}
                errorMessage={errors.email}
                keyboardType={'email-address'}
              />
              <AppButton
                title="Submit"
                containerStyle={styles.btnStyle}
                onPress={handleSubmit}
                loading={loading}
                disabled={loading}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgotPassword;
