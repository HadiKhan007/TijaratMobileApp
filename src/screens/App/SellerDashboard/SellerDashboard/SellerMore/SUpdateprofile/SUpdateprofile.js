import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppTitle,
  TaskInput,
  TopHeader,
} from '../../../../../../component';
import {appIcons} from '../../../../../../utilities';

const SUpdateprofile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Update Profile" />
        <AppTitle Title="Contact Info..." mainContainer={styles.titleCon} />
        <TaskInput
          title="Shop Name"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Faheem Store"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Email"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="example123@gmail.com"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Address"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Shadbag"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Town/City"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Lahore"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Country"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="Pakistan"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Phone"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="+92123456789"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <View style={styles.rowContainer}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Update"
            // onPress={() => navigation.navigate('UMyAccount')}
          />
          <AppButton
            containerStyle={styles.btn2Style}
            title="Back"
            titleStyle={styles.btn2Title}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SUpdateprofile;
