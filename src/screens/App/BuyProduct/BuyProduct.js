import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  AboutSellerCard,
  AppButton,
  AppHeader,
  AppTitle,
  DropDown,
} from '../../../component';
import {appIcons} from '../../../utilities';
import ImageSlider from 'react-native-image-slider-show';

const BuyProduct = ({navigation}) => {
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
        <AppHeader />
        <ImageSlider
          autoPlayWithInterval={3000}
          autoplay={false}
          circleLoop={false}
          resizeMode="center"
          dataSource={[
            {url: 'http://placeimg.com/640/480/any'},
            {url: 'http://placeimg.com/640/480/any'},
            {url: 'http://placeimg.com/640/480/any'},
          ]}
        />
        <Text style={styles.priceText}>
          Rs <Text style={styles.numText}>14,000.00</Text>
        </Text>
        <AppTitle
          Title="Brilliant things happen, When you buy from real person."
          mainContainer={styles.titleCon}
        />
        <Text style={styles.descStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting...
        </Text>

        <TouchableOpacity>
          <Text style={styles.readStyle}>Read Full Description</Text>
        </TouchableOpacity>

        <View style={styles.newRowCon}>
          <Text style={styles.textStyle}>Size</Text>
          <View style={styles.dropbg}>
            <DropDown
              value={selectItem}
              data={categoryData}
              onSelect={onSelect}
            />
          </View>
        </View>
        <View style={styles.newRowCon}>
          <Text style={styles.textStyle}>Quantity</Text>
          <View style={styles.dropbg}>
            <DropDown
              value={selectItem}
              data={categoryData}
              onSelect={onSelect}
            />
          </View>
        </View>
        <AppButton
          title="Buy it Now"
          onPress={() => navigation.navigate('PlaceOrder')}
        />
        <View style={styles.rowContainer}>
          <AppButton
            title="Buy it Now"
            titleStyle={styles.btnText}
            containerStyle={styles.btnStyle}
            onPress={() => navigation.navigate('MakeOffer')}
          />
          <TouchableOpacity>
            <Image
              source={appIcons.cart}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <AboutSellerCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyProduct;
