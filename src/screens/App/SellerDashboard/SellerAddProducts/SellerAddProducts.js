import React, {useEffect, useRef, useState} from 'react';
import {View, SafeAreaView, Text, Alert, Platform} from 'react-native';
import styles from './styles';
import {
  AddImage,
  AddSpecsInput,
  AppButton,
  AppLoader,
  AppTitle,
  ClickButton,
  CustomDropdown,
  ImagePickerModal,
  TaskInput,
  TopHeader,
  VariationsInput,
} from '../../../../component';
import {
  AddProductFormFields,
  addProductVS,
  appIcons,
  checkPermission,
  colors,
  image_options,
} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {addProductAsync} from '../../../../redux/Slices/SellerSlices/AddProductSlice';
import {fetchCategoriesAsync} from '../../../../redux/Slices/SellerSlices/categoriesSlice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SellerAddProducts = () => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const addedProduct = useSelector(state => state.addProduct?.addedProduct);
  const loading = useSelector(state => state.addProduct?.loading);
  const {categories} = useSelector(state => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [show, setshow] = useState(false);
  const [offer, setOffer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [condition, setCondition] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const {user} = useSelector(state => state?.auth);
  const sellerId = user?.user?.seller?._id;
  const token = user?.token;
  const [selectedButton, setSelectedButton] = useState(null);
  const [error, setError] = useState(null);
  const [attribute, setAttribute] = useState(false);
  const [variations, setVariations] = useState(false);

  const handleButtonClick = buttonName => {
    buttonName === 'Accept Offers' ? setOffer(!offer) : null;
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  const handleItemSelected = itemId => {
    setSelectedItem(itemId);
    setCondition(itemId);
  };
  const handleCategoryChange = item => {
    setSelectedCategory(item.value);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryChange = item => {
    setSelectedSubCategory(item.value);
  };
  useEffect(() => {
    if (addedProduct) {
    }
  }, [addedProduct]);
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
    try {
      launchImageLibrary({}, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled image picker');
        } else if (response.error) {
          Alert.alert('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          Alert.alert('User tapped custom button: ', response.customButton);
        } else {
          if (response.assets && response.assets.length > 0) {
            setSelectedImage(response.assets[0]);
          }
        }
      });
    } catch (err) {
      console.error('Error in showGallery:', err);
    }
  };
  const selectedCategoryId = categories.find(
    cat => cat.category._id === selectedCategory,
  )?.category._id;

  const selectedSubCategoryId = categories
    .find(cat => cat.category._id === selectedCategory)
    ?.subCategories.find(subCat => subCat._id === selectedSubCategory)?._id;

  const handleClick = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('shortDetails', values.shortDetails);
    formData.append('weight', values.weight);
    formData.append('discount', values.discount);
    formData.append('description', values.description);
    formData.append('stock', values.stock);
    formData.append('condition', 'used');
    formData.append('category', selectedCategoryId);
    formData.append('subCategory', selectedSubCategoryId);
    formData.append('rating', '5');
    formData.append('salePrice', '100');
    formData.append('addBrand', values.addBrand);
    formData.append('expectedDelivery', values.expectedDelivery);
    formData.append('deliveryOptions', selectedItem.label);
    formData.append('hasShippingRules', selectedButton);
    formData.append('serllerId', sellerId);
    formData.append('applyMakeAnOffer', offer);
    formData.append('pictures', selectedImage?.fileName);
    formData.append('sale', true);

    if (selectedImage) {
      formData.append('featureImage', '');
    }
    try {
      setError(null);
      console.log('Dispatching addProductAsync');
      await dispatch(addProductAsync({productData: formData, token}));
      console.log('addProductAsync dispatched successfully');
      Alert.alert('Done Dispatch');
    } catch (err) {
      if (err.message) {
        setError(err.message);
        console.log('Error message:', err.message);
      } else {
        setError('An error occurred');
        console.log('An error occurred');
      }
      console.error('Error dispatching addProductAsync:', err);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Formik
        innerRef={formikRef}
        initialValues={AddProductFormFields}
        onSubmit={values => {
          handleClick(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={addProductVS}>
        {({values, errors, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView
            style={styles.main}
            enableOnAndroid
            contentContainerStyle={styles.contentContainer}
            enableAutomaticScroll
            showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <TopHeader iconName={appIcons.menuIcon} title="Add a Product" />
              <AppTitle
                Title="Add Product"
                mainContainer={styles.titleContainer}
              />
              <TaskInput
                title="Product Name"
                placeholder="Enter Product Name"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.name}
                onChangeText={handleChange('name')}
                errorMessage={errors.name}
              />
              <TaskInput
                title="Price"
                placeholder="Enter Product Price"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.price}
                onChangeText={handleChange('price')}
                errorMessage={errors.price}
              />
              <TaskInput
                title="Short Details"
                placeholder="Details of Product"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                maxLength={300}
                multiline={true}
                inputContainerStyle={styles.inputContainerStyle}
                value={values.shortDetails}
                onChangeText={handleChange('shortDetails')}
                errorMessage={errors.shortDetails}
              />
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
              <TaskInput
                title="Weight (Kg)"
                placeholder="Enter Product Weight"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.weight}
                onChangeText={handleChange('weight')}
                errorMessage={errors.weight}
              />
              <TaskInput
                title="Discount (%)"
                placeholder="0"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.discount}
                onChangeText={handleChange('discount')}
                errorMessage={errors.discount}
              />
              <TaskInput
                title="Stock"
                placeholder="Stock"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.stock}
                onChangeText={handleChange('stock')}
                errorMessage={errors.stock}
              />
              <CustomDropdown
                items={[
                  {label: 'Used', value: 0},
                  {label: 'New', value: 1},
                ]}
                onSelectItem={handleItemSelected}
                title="Condition"
                error={errors.condition}
              />

              <CustomDropdown
                items={categories.map(category => ({
                  label: category.category.name,
                  value: category.category._id,
                }))}
                setItems={selectedCategory}
                title="Select Category"
                onSelectItem={item => handleCategoryChange(item)}
                error={errors.category}
              />
              {selectedCategory &&
                categories.find(
                  cat => cat.category._id === selectedCategory,
                ) && (
                  <CustomDropdown
                    items={categories
                      .find(cat => cat.category._id === selectedCategory)
                      .subCategories.map(subCategory => ({
                        label: subCategory.name,
                        value: subCategory._id,
                      }))}
                    setItems={selectedSubCategory}
                    title="Select Subcategory"
                    onSelectItem={item => handleSubCategoryChange(item)}
                    error={errors.subcategory}
                  />
                )}

              <TaskInput
                title="Add Brand"
                placeholder="Brand Name"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.addBrand}
                onChangeText={handleChange('addBrand')}
                errorMessage={errors.addBrand}
              />
              <TaskInput
                title="Expected Delivery Days"
                placeholder="Expected Delivery Days"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.expectedDelivery}
                onChangeText={handleChange('expectedDelivery')}
                errorMessage={errors.expectedDelivery}
              />
              <CustomDropdown
                items={[
                  {
                    label: 'All Over Pakistan',
                    value: 0,
                  },
                  {
                    label: 'Worldwide/Globally',
                    value: 1,
                  },
                  {
                    label: 'Locally',
                    value: 2,
                  },
                ]}
                onSelectItem={handleItemSelected}
                title="Delivery Option"
                error={errors.deliveryOptions}
              />
              <AddImage
                title="Add Feature Image"
                onPress={() => setshow(!show)}
                selectedImage={selectedImage}
              />
              {errors.featureImage && (
                <Text style={styles.errorMessage}>{errors.featureImage}</Text>
              )}
              <ClickButton
                title="Accept Offers"
                selected={offer}
                onPress={() => handleButtonClick('Accept Offers')}
              />
              <AppTitle
                Title="Shipping Cost"
                mainContainer={styles.titleContainer}
              />
              <View style={styles.cardStyle}>
                <ClickButton
                  title="Free Shipping"
                  selected={selectedButton === 'Free Shipping'}
                  onPress={() => handleButtonClick('Free Shipping')}
                />
                <ClickButton
                  title="General Shipping Rules"
                  selected={selectedButton === 'General Shipping Rules'}
                  onPress={() => handleButtonClick('General Shipping Rules')}
                />
                <ClickButton
                  title={`Special shipping rules for this ${'\n'} product only`}
                  selected={
                    selectedButton ===
                    'Special shipping rules for this product only'
                  }
                  onPress={() =>
                    handleButtonClick(
                      'Special shipping rules for this product only',
                    )
                  }
                />
              </View>
              <AppTitle
                Title="Variations"
                mainContainer={styles.titleContainer}
              />
              <VariationsInput
                title="Product Variations"
                placeholder1="Size, Material, Color"
                placeholder2="Value(L/M/S)"
              />
              <View style={styles.cardStyle}>
                <ClickButton
                  title="Product/Variations"
                  selected={variations}
                  onPress={() => setVariations(!variations)}
                />
                {variations && (
                  <VariationsInput
                    title="Product Variations"
                    placeholder1="Size, Material, Color"
                    placeholder2="Value(L/M/S)"
                  />
                )}
              </View>
              <AppTitle
                Title="Attributes"
                mainContainer={styles.titleContainer}
              />
              <View style={styles.cardStyle}>
                <ClickButton
                  title="Attributes/Specs"
                  selected={attribute}
                  onPress={() => setAttribute(!attribute)}
                />

                {attribute && (
                  <AddSpecsInput
                    title="Attributes/Specs"
                    placeholder1="Space Name"
                    placeholder2="Value"
                  />
                )}
              </View>

              <AppButton
                title="Add Now"
                containerStyle={styles.btnStyle}
                onPress={handleSubmit}
              />
              <AppButton
                title="Discard"
                containerStyle={styles.btn2Style}
                titleStyle={styles.btn2Title}
              />
              <ImagePickerModal
                show={show}
                onPressHide={() => setshow(false)}
                onPressCamera={() => showCamera()}
                onPressGallery={() => showGallery()}
              />
              <AppLoader loading={loading} />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SellerAddProducts;
