import React, {useState} from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppDivider,
  AppTitle,
  DropDown,
  TaskInput,
  TopHeader,
  WishCard,
} from '../../../component';
import {appIcons, colors} from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PlaceOrder = ({navigation}) => {
  const [selectItem, setSelectItem] = useState('');
  let categoryData = [
    {id: 1, name: 'COD', key: 'myself'},
    {id: 3, name: 'EasyPaisa', key: 'someone'},
    {id: 2, name: 'JazzCash', key: 'business'},
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
          <TopHeader title="" iconName={appIcons.backArrow} />
          <AppTitle
            Title="Seller: Mian Fahad"
            mainContainer={styles.titleCon}
          />
          <AppDivider lineStyle={styles.lineStyle} />
          <WishCard />
          <AppDivider lineStyle={styles.lineStyle} />
          <Text style={styles.titleStyle}>Personal Info...</Text>
          <TaskInput
            title="Full Name"
            placeholder="Enter Your Name"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <TaskInput
            title="Enter Email"
            placeholder="Enter Your Email"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <TaskInput
            title="Phone no."
            placeholder="Enter Your Phone no."
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <TaskInput
            title="Address"
            placeholder="Enter Adress"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <DropDown
            title="Town/ City"
            value={selectItem}
            data={categoryData}
            onSelect={onSelect}
          />
          <DropDown
            title="Country"
            value={selectItem}
            data={categoryData}
            onSelect={onSelect}
          />
          <TaskInput
            title="Zip/Postal Code"
            placeholder="Pakistan"
            placeholderTextColor={colors.p2}
            titleStyle={styles.inputTitle}
          />
          <AppDivider />
          <Text style={styles.titleStyle}>Payment Option</Text>
          <DropDown
            title="Select Subcategory"
            value={selectItem}
            data={categoryData}
            onSelect={onSelect}
          />
        </View>
        <AppDivider style={styles.lineStyle} />
        <AppButton
          containerStyle={styles.btnStyle}
          title="Place Order"
          onPress={() => navigation.navigate('ConfirmOrder')}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PlaceOrder;
