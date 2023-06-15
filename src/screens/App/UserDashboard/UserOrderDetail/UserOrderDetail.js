import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {AppButton, AppTitle, OfferCard, TopHeader} from '../../../../component';
import {appIcons} from '../../../../utilities';
import styles from './styles';

const UserOrderDetail = ({navigation}) => {
  const detailsProps = {
    heading1: 'Product Name:',
    subHeading1: 'Apple Iphone Cable',
    heading2: 'Quantity:',
    subHeading2: '01',
    heading3: 'Price:',
    subHeading3: 'Rs 1000',
    heading4: 'Payment:',
    subHeading4: 'COD',
    heading5: 'Status:',
    subHeading5: 'Received',
    heading6: 'Phone No.',
    subHeading6: 'N/A',
    heading7: 'Total:',
    subHeading7: 'Rs 1000',
  };
  const addressProps = {
    heading1: 'Name:',
    subHeading1: 'Hamza Basra Habib',
    heading2: 'Address:',
    subHeading2: 'House1 Lahore, Pakistan',
    heading3: 'Email:',
    subHeading3: 'hamza1basra@gmail.com',
    heading4: 'Phone No:',
    subHeading4: '+923000000000',
  };
  const summaryProps = {
    heading1: 'Subtotal:',
    subHeading1: 'Rs 1000',
    heading2: 'Shipping',
    subHeading2: 'Rs 10',
    heading3: 'tax(GST)',
    subHeading3: '0',
    heading4: 'Total:',
    subHeading4: 'Rs 1010',
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <TopHeader
          title="Order Detail"
          iconName={appIcons.backArrow}
          mainContainer={styles.headerContainer}
        />
        <AppTitle Title="Your Order Details" />
        <OfferCard {...detailsProps} />
        <AppTitle Title="Shipping Address" />
        <OfferCard {...addressProps} />
        <AppTitle Title="Summary" />
        <OfferCard {...summaryProps} />
        <AppButton
          title="Back"
          containerStyle={styles.btnStyle}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserOrderDetail;
