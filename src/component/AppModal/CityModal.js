/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  appIcons,
  citiesFromField,
  citiesVs,
  colors,
  family,
  size,
  WP,
} from '../../utilities';
import {TaskInput} from '../AppInput/TaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../AppButton/AppButton';
import {CustomDropdown} from '../DropDown/CustomDropDown';
import {ClickButton} from '../AppButton/ClickButton';
import {Formik} from 'formik';

const CityModal = ({
  isModalVisible,
  onPress,
  cities,
  onSave,
  editIndex,
  editedValues,
}) => {
  const formikRef = useRef();
  const [state, setState] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSetItems = newItems => {
    setSelectedCity(newItems);
  };
  const citiesData = cities?.cities?.cities;
  const handleSave = values => {
    onSave(values, selectedCity, editIndex);
    toggleModal();
  };
  const toggleModal = () => {
    onPress();
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={editedValues || citiesFromField}
      onSubmit={values => {
        handleSave(values, selectedCity);
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={citiesVs}>
      {({values, errors, handleSubmit, handleChange}) => (
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
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={onPress}>
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
                value={values.zoneName}
                onChangeText={handleChange('zoneName')}
                errorMessage={errors.zoneName}
              />
              <CustomDropdown
                items={citiesData?.map(city => ({
                  label: city,
                  value: city,
                }))}
                title="Zone"
                onSelectItem={handleSetItems}
                setItems={selectedCity}
              />
              {state === false && (
                <TaskInput
                  title="Add cost"
                  titleStyle={styles.inputTitle}
                  inputContainerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Rs."
                  placeholderTextColor={colors.p2}
                  value={values.cost}
                  onChangeText={handleChange('cost')}
                  errorMessage={errors.cost}
                  keyboardType={'numeric'}
                />
              )}
              <ClickButton
                title="Add cost rule by weight"
                onPress={() => setState(!state)}
                selected={state}
              />
              {state && (
                <TaskInput
                  titleStyle={styles.inputTitle}
                  inputContainerStyle={styles.containerStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Rs."
                  placeholderTextColor={colors.p2}
                  value={`Rs. ${values.cost} / KG`}
                  onChangeText={handleChange('cost')}
                  errorMessage={errors.cost}
                  keyboardType={'numeric'}
                  editable={false}
                />
              )}
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'center', marginVertical: WP('3')},
                ]}>
                <AppButton
                  containerStyle={styles.btnStyle}
                  title="Save"
                  onPress={handleSubmit}
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
      )}
    </Formik>
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
    height: '75%',
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

export {CityModal};
