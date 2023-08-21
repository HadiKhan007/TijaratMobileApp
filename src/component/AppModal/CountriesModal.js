/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {appIcons, colors, family, size, WP} from '../../utilities';
import {TaskInput} from '../AppInput/TaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../AppButton/AppButton';
import {CustomDropdown} from '../DropDown/CustomDropDown';
import {ClickButton} from '../AppButton/ClickButton';

const CountriesModal = ({isModalVisible, onPress}) => {
  const [state, setState] = useState(false);
  return (
    <KeyboardAwareScrollView
      style={styles.main}
      enableOnAndroid
      contentContainerStyle={styles.contentContainer}
      enableAutomaticScroll
      showsVerticalScrollIndicator={false}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.titleStyle}>Add Shipping Zone</Text>
            <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
              <Image
                source={appIcons.crossIcon}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <TaskInput
            title="Zone Name"
            titleStyle={styles.inputTitle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Customers won’t see this."
            placeholderTextColor={colors.p2}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}
          />
          <CustomDropdown items={[]} title="Countries" />

          <TaskInput
            title="Add cost"
            titleStyle={styles.inputTitle}
            inputContainerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Rs."
            placeholderTextColor={colors.p2}
            // value={values.email}
            // onChangeText={handleChange('email')}
            // errorMessage={errors.email}
            keyboardType={'numeric'}
          />
          <ClickButton
            title="Add cost rule by weight"
            onPress={() => setState(!state)}
            selected={state}
          />
          <View
            style={[
              styles.rowContainer,
              {justifyContent: 'center', marginVertical: WP('3')},
            ]}>
            <AppButton
              containerStyle={styles.btnStyle}
              title="Save"
              // onPress={() => navigation.navigate('UMyAccount')}
            />
            <AppButton
              containerStyle={styles.btn2Style}
              title="Cancel"
              titleStyle={styles.btn2Title}
              onPress={onPress}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_bold,
    fontSize: size.small,
    marginVertical: WP('5'),
  },
  modalContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.w2,
    height: '65%',
    paddingHorizontal: WP('5'),
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: '30%',
    borderRadius: 100,
    marginHorizontal: WP('1'),
  },
  btn2Style: {
    width: '30%',
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p3,
    borderRadius: 100,
    marginHorizontal: WP('1'),
    height: WP('11'),
  },
  btn2Title: {
    color: colors.p3,
  },
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
});

export {CountriesModal};
