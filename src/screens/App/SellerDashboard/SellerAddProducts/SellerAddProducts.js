import React, {useRef, useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {
  AddImage,
  AddSpecsInput,
  AppButton,
  AppTitle,
  ClickButton,
  CustomDropdown,
  DropDown,
  TaskInput,
  TopHeader,
} from '../../../../component';
import {
  AddProductFormFields,
  addProductVS,
  appIcons,
  colors,
} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {addProductNew} from '../../../../redux/Slices/SellerSlices/AddProductSlice';
import DropDownPicker from 'react-native-dropdown-picker';

const SellerAddProducts = () => {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const [selectItem, setSelectItem] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const products = useSelector(state => state.products);
  const {user} = useSelector(state => state.auth);
  const {userId} = useSelector(state => state.userId);
  console.log('Products===>,', userId);
  const [items, setItems] = useState([
    {label: 'For Me', value: 'mySelf'},
    {label: 'For Someone Else', value: 'someone'},
    {label: 'For My Business', value: 'business'},
  ]);

  let categoryData = [
    {id: 1, name: 'For Me', key: 'myself'},
    {id: 3, name: 'For Someone Else', key: 'someone'},
    {id: 2, name: 'For My Business', key: 'business'},
  ];
  const onSelect = item => {
    setSelectItem(item);
  };

  const handleClick = values => {
    console.log(values);
    const newProduct = {
      id: Date.now(), // You can use any unique identifier here
      name: values?.productName,
    };
    dispatch(addProductNew(newProduct));
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
              <CustomDropdown items={items} setItems={setItems} title="City" />
              <TaskInput
                title="Product Name"
                placeholder="Enter Product Name"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
                value={values.productName}
                onChangeText={handleChange('productName')}
                errorMessage={errors.productName}
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
                placeholder="Optional"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
              />
              <TaskInput
                title="Stock"
                placeholder="Optional"
                placeholderTextColor={colors.p2}
                titleStyle={styles.inputTitle}
              />
              <DropDown
                title="Condition"
                value={selectItem}
                data={categoryData}
                onSelect={onSelect}
              />
              <DropDown
                title="Select Category"
                value={selectItem}
                data={categoryData}
                onSelect={onSelect}
              />
              <DropDown
                title="Select Subcategory"
                value={selectItem}
                data={categoryData}
                onSelect={onSelect}
              />

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
              <DropDown
                title="Delivery Options"
                value={selectItem}
                data={categoryData}
                onSelect={onSelect}
              />
              <AddImage />
              <ClickButton title="Accept Offers" />
              <AppTitle
                Title="Shipping Cost"
                mainContainer={styles.titleContainer}
              />

              <ClickButton title="Free Shipping" />
              <ClickButton title="General Shipping Rules" />
              <ClickButton title="Special shipping rules for this product only" />
              <AddSpecsInput
                title="Attributes/Specs"
                placeholder1="Space Name"
                placeholder2="Value"
              />
              <AddSpecsInput
                title="Product Variations"
                placeholder1="Size, Material, Color"
                placeholder2="Value(L/M/S)"
              />

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
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SellerAddProducts;
