import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  AppButton,
  DropDown,
  TaskInput,
  TopHeader,
} from '../../../../../../../component';
import {appIcons} from '../../../../../../../utilities';

const EasyPaisa = () => {
  const [selectItem, setSelectItem] = useState('');
  let checkStatus = [
    {id: 1, name: 'Active', key: 'myself'},
    {id: 2, name: 'deactive', key: 'someone'},
  ];
  const onSelect = item => {
    setSelectItem(item);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="EasyPaisa" />
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>EasyPaisa</Text>
          <DropDown value={selectItem} data={checkStatus} onSelect={onSelect} />
        </View>
        <TaskInput
          title="Method Display Name"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="EasyPaisa"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
          editable={false}
        />
        <TaskInput
          title="Payment Method"
          titleStyle={styles.titleStyle}
          inputContainerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder="EASYPAISA"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
          editable={false}
        />
        <TaskInput
          title="Account Title"
          titleStyle={styles.titleStyle}
          inputStyle={styles.inputStyle}
          placeholder="Enter account title"

          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <TaskInput
          title="Phone No."
          titleStyle={styles.titleStyle}
          inputStyle={styles.inputStyle}
          placeholder="Enter phone no"
          // value={values.email}
          // onChangeText={handleChange('email')}
          // errorMessage={errors.email}
          // keyboardType={'email-address'}
        />
        <View style={styles.btnRow}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Submit"
            // onPress={() => navigation.navigate('UMyAccount')}
          />
          <AppButton
            containerStyle={styles.btn2Style}
            title="Back"
            titleStyle={styles.btn2Title}
            // onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EasyPaisa;
