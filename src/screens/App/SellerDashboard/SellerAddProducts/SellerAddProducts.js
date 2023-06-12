import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {
  AddImage,
  AddSpecsInput,
  AppButton,
  AppTitle,
  ClickButton,
  DropDown,
  TaskInput,
  TopHeader,
} from '../../../../component';
import {WP, appIcons, colors} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalDropdown from 'react-native-modal-dropdown';

const SellerAddProducts = () => {
  const [selectItem, setSelectItem] = useState('');
  let categoryData = [
    {id: 1, name: 'For Me', key: 'myself'},
    {id: 3, name: 'For Someone Else', key: 'someone'},
    {id: 2, name: 'For My Business', key: 'business'},
  ];
  const onSelect = item => {
    setSelectItem(item);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <KeyboardAwareScrollView
        style={styles.main}
        enableOnAndroid
        contentContainerStyle={styles.contentContainer}
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <TopHeader iconName={appIcons.menuIcon} title="Add a Product" />
          <AppTitle Title="Add Product" mainContainer={styles.titleContainer} />

          <TaskInput
            title="Product Name"
            placeholder="Enter Product Name"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <TaskInput
            title="Price"
            placeholder="Enter Product Price"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <TaskInput
            title="Short Details"
            placeholder="Details of Product"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
            maxLength={300}
            multiline={true}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <TaskInput
            title="Description"
            placeholder="Description of Product"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
            multiline={true}
            inputContainerStyle={styles.inputContainerStyle}
          />
          <TaskInput
            title="Weight (Kg)"
            placeholder="Enter Product Weight"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
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
          />
          <TaskInput
            title="Expected Delivery Days"
            placeholder="Expected Delivery Days"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
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

          <AppButton title="Add Now" containerStyle={styles.btnStyle} />
          <AppButton
            title="Discard"
            containerStyle={styles.btn2Style}
            titleStyle={styles.btn2Title}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SellerAddProducts;
