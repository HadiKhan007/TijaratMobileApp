import React, {useRef, useState} from 'react';
import {View, Text, SafeAreaView, Alert, Platform} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {
  AddImage,
  AppButton,
  ImagePickerModal,
  TaskInput,
  TopHeader,
} from '../../../component';
import {
  appIcons,
  checkPermission,
  colors,
  image_options,
  sRegisterFormFields,
  sRegisterVS,
} from '../../../utilities';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SellerRegister = () => {
  const formikRef = useRef();
  const [show, setshow] = useState(false);
  const [image, setImage] = useState('');

  const uploadImage = selectedImage => {
    try {
      if (selectedImage) {
        const data = new FormData();

        data.append('image', {
          name: selectedImage?.fileName,
          type: selectedImage?.type,
          uri:
            Platform.OS === 'ios'
              ? selectedImage?.uri.replace('file://', '')
              : selectedImage?.uri,
        });
      }
    } catch (error) {
      Alert.alert('Error', error);
    }
  };
  const showCamera = async () => {
    setshow(false);
    const result = await checkPermission('camera');

    setTimeout(() => {
      try {
        if (result) {
          launchCamera(image_options, response => {
            if (response.didCancel) {
              Alert.alert('User cancelled image picker');
            } else if (response.error) {
              Alert.alert('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              Alert.alert('User tapped custom button: ', response.customButton);
            } else {
              if (response) {
                uploadImage(response?.assets[0]);
              }
            }
          });
        }
      } catch (error) {
        //do something
      }
    }, 800);
  };
  const showGallery = async () => {
    setshow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(image_options, response => {
          if (response.didCancel) {
            Alert.alert('User cancelled image picker');
          } else if (response.error) {
            Alert.alert('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            Alert.alert('User tapped custom button: ', response.customButton);
          } else {
            if (response) {
              uploadImage(response.assets[0]);
            }
          }
        });
      } catch (error) {
        //do something
      }
    }, 800);
  };

  const handleRegister = () => {};

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={sRegisterFormFields}
        onSubmit={values => {
          handleRegister(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={sRegisterVS}>
        {({values, errors, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView
            style={styles.main}
            enableOnAndroid
            contentContainerStyle={styles.contentContainer}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <TopHeader title="Seller Shop" iconName={appIcons.backArrow} />
              <TaskInput
                title="Shop Name"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Shop Name"
                value={values.shopName}
                onChangeText={handleChange('shopName')}
                errorMessage={errors.shopName}
              />
              <AddImage title="Shop Image" onPress={() => setshow(!show)} />
              <TaskInput
                title="Street Address"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Street Address"
                value={values.streetAddress}
                onChangeText={handleChange('streetAddress')}
                errorMessage={errors.streetAddress}
              />
              <TaskInput
                title="Country"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Country"
                value={values.country}
                onChangeText={handleChange('country')}
                errorMessage={errors.country}
              />
              <TaskInput
                title="City"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter City"
                value={values.city}
                onChangeText={handleChange('city')}
                errorMessage={errors.city}
              />
              <TaskInput
                title="Zip Code"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter Zip Code"
                value={values.zipCode}
                onChangeText={handleChange('zipCode')}
                errorMessage={errors.zipCode}
              />
              <TaskInput
                title="CNIC Name"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter CNIC Name"
                value={values.cnicName}
                onChangeText={handleChange('cnicName')}
                errorMessage={errors.cnicName}
              />
              <TaskInput
                title="CNIC Number"
                titleStyle={styles.titleStyle}
                inputContainerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                placeholder="Enter CNIC Number"
                value={values.cnicNum}
                onChangeText={handleChange('cnicNum')}
                errorMessage={errors.cnicNum}
              />
              <AddImage title="Front Image (CNIC)" />
              <AddImage title="Back Image (CNIC)" />
              <TaskInput
                title="Description"
                placeholder="Description of Product"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                multiline={true}
                inputContainerStyle={styles.inputContainerStyle}
                value={values.description}
                onChangeText={handleChange('description')}
                errorMessage={errors.description}
              />
              <AppButton
                title="Register Seller Account"
                containerStyle={styles.btnStyle}
                onPress={handleSubmit}
              />
              <ImagePickerModal
                show={show}
                onPressHide={() => setshow(false)}
                onPressCamera={() => showCamera()}
                onPressGallery={() => showGallery()}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SellerRegister;
