/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  appIcons,
  colors,
  distanceFormFiled,
  distanceVS,
  family,
  size,
  WP,
} from '../../utilities';
import {TaskInput} from '../AppInput/TaskInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton} from '../AppButton/AppButton';
import {Formik} from 'formik';

const DistanceModal = ({isModalVisible, onPress}) => {
  const formikRef = useRef();
  const handleSave = () => {};

  return (
    <Formik
      innerRef={formikRef}
      initialValues={distanceFormFiled}
      onSubmit={values => {
        handleSave(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={distanceVS}>
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
                <Text style={styles.titleStyle}>Add Rules by Distance</Text>
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
                title="Distance in KM"
                titleStyle={styles.inputTitle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Distance in KM"
                placeholderTextColor={colors.p2}
                value={values.distance}
                onChangeText={handleChange('distance')}
                errorMessage={errors.distance}
                keyboardType={'numeric'}
              />
              <TaskInput
                title="Flat Rate"
                titleStyle={styles.inputTitle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Cost"
                placeholderTextColor={colors.p2}
                value={values.cost}
                onChangeText={handleChange('cost')}
                errorMessage={errors.cost}
                keyboardType={'numeric'}
              />
              <View
                style={[
                  styles.rowContainer,
                  {justifyContent: 'center', marginVertical: WP('3')},
                ]}>
                <AppButton
                  containerStyle={styles.btnStyle}
                  title="Save"
                  onPress={handleSubmit}
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
    height: '55%',
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

export {DistanceModal};
