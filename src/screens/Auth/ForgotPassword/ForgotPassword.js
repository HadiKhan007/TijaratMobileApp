import React, {useRef} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {AppButton, TaskInput, TopHeader} from '../../../component';
import {appIcons, forgotPass, forgotVS} from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const ForgotPassword = () => {
  const formikRef = useRef();
  const handleForgot = () => {};

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
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgotPassword;
