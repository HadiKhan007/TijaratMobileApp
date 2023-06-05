import React, {useRef} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
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

const SignUp = ({navigation}) => {
  const formikRef = useRef();
  const handleSignUp = () => {};

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
                title="Log In"
                containerStyle={styles.btnStyle}
                onPress={handleSubmit}
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
