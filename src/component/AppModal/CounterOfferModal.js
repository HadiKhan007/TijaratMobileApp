import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {
  CounterOfferFormField,
  WP,
  appIcons,
  colors,
  counterOfferVS,
  family,
  size,
} from '../../utilities';
import Modal from 'react-native-modal';
import {AppTitle} from '../AppTitle/AppTitle';
import {AppButton} from '../AppButton/AppButton';
import {TaskInput} from '../AppInput/TaskInput';
import {Formik} from 'formik';

const CounterOfferModal = ({isModalVisible, onPress}) => {
  const formikRef = useRef();
  const handleButton = () => {};

  return (
    <Formik
      innerRef={formikRef}
      initialValues={CounterOfferFormField}
      onSubmit={values => {
        handleButton(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={counterOfferVS}>
      {({values, errors, handleSubmit, handleChange}) => (
        <Modal onBackdropPress={onPress} isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <AppTitle
              Title="Counter offer"
              iconName={appIcons.crossIcon}
              onPress={onPress}
              mainContainer={styles.titleContainer}
            />
            <TaskInput
              title="Counter offer"
              titleStyle={styles.inputTitle}
              inputContainerStyle={styles.containerStyle}
              inputStyle={styles.inputStyle}
              placeholder="Enter amount"
              placeholderTextColor={colors.p2}
              value={values.amount}
              onChangeText={handleChange('amount')}
              errorMessage={errors.amount}
            />
            <AppButton
              title="Counter offer"
              onPress={handleSubmit}
              containerStyle={styles.cBtn}
            />
          </View>
        </Modal>
      )}
    </Formik>
  );
};

export {CounterOfferModal};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    backgroundColor: colors.w1,
    width: '100%',
    height: '42%',
    alignSelf: 'center',
    borderRadius: 8,
    padding: WP('3'),
  },

  iconStyle: {
    width: WP('7'),
    height: WP('7'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
    alignSelf: 'center',
    marginVertical: WP('3'),
  },
  cBtn: {
    backgroundColor: colors.gr,
    marginTop: WP('5'),
  },
  contentContainer: {
    flexGrow: 1,
  },
});
