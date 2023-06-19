import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
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

const PlaceOrder = () => {
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
      <ScrollView style={styles.mainContainer}>
        <TopHeader title="" iconName={appIcons.backArrow} />
        <AppTitle Title="Seller: Mian Fahad" mainContainer={styles.titleCon} />
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
        <AppDivider />
        <Text style={styles.titleStyle}>Payment Option</Text>
        <DropDown
          title="Select Subcategory"
          value={selectItem}
          data={categoryData}
          onSelect={onSelect}
        />
        <AppDivider />
        <AppButton containerStyle={styles.btnStyle} title="Place Order" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceOrder;
