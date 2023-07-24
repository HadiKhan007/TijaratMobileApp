import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppHeader,
  AppTitle,
  HCategoryCard,
  ItemCard,
  SearchItem,
} from '../../../../component';
import {WP, appIcons, appImages} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FloatingAction} from 'react-native-floating-action';

const HomeScreen = ({navigation}) => {
  const HCategoryData = [
    {id: 0, iconName: appIcons.lcd, title: 'LED'},
    {id: 1, iconName: appIcons.mobile, title: 'Mobile'},
    {id: 2, iconName: appIcons.dumble, title: 'Fitness'},
    {id: 3, iconName: appIcons.lcd, title: 'LED'},
    {id: 4, iconName: appIcons.mobile, title: 'Mobile'},
    {id: 5, iconName: appIcons.dumble, title: 'Fitness'},
  ];
  const ItemCardData = [
    {
      id: 0,
      imageName: appImages.plugs,
      text: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
      price: '$12.98',
      discount: '50% OFF',
    },
    {
      id: 1,
      imageName: appImages.pent,
      text: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
      price: '$12.98',
      discount: '50% OFF',
    },
    {
      id: 2,
      imageName: appImages.plugs,
      text: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
      price: '$12.98',
      discount: '50% OFF',
    },
  ];
  // const renderItem = ({item}) => <HCategoryCard item={item} />;
  const renderItemCard = ({item}) => <ItemCard item={item} />;
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <KeyboardAwareScrollView
        style={styles.main}
        enableOnAndroid
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}> */}
      {/* <View style={styles.mainContainer}> */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: WP('54'),
        }}>
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
          <AppHeader />
          <SearchItem />
        </View>

        <View style={styles.fContainer}>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you buy from real person.
          </Text>
          <Text style={styles.subTitle}>
            Watch favourites, track orders and get recommendations.
          </Text>
          <AppButton
            title="Shop Now"
            containerStyle={styles.btnStyle}
            titleStyle={styles.btnText}
          />
        </View>
        <Image
          source={appImages.baby}
          resizeMode="contain"
          style={styles.imgStyle}
        />
        <AppTitle
          Title="Explore Top Category"
          secondTitle="See all"
          onPress={() => navigation.navigate('AllCategories')}
          // onPress={() =>
          //   navigation.navigate('OtherScreensStack', {screen: 'ClickedItem'})
          // }
        />
        {/* <FlatList
          data={HCategoryData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          contentContainerStyle={{
            flexDirection: 'row',
            // flexWrap: 'wrap',
          }}
        /> */}
        <View style={{flexDirection: 'row'}}>
          <HCategoryCard iconName={appIcons.lcd} title="LED" />
          <HCategoryCard iconName={appIcons.mobile} title="Mobile" />
          <HCategoryCard iconName={appIcons.dumble} title="Fitness" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <HCategoryCard iconName={appIcons.lcd} title="LED" />
          <HCategoryCard iconName={appIcons.mobile} title="Mobile" />
          <HCategoryCard iconName={appIcons.dumble} title="Fitness" />
        </View>

        <AppTitle Title="Recommended Items" secondTitle="See all" />
        <FlatList
          data={ItemCardData}
          renderItem={renderItemCard}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          contentContainerStyle={{
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
        />
      </ScrollView>

      {/* </View> */}
      {/* <View style={styles.fContainer}>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you buy from real person.
          </Text>
          <Text style={styles.subTitle}>
            Watch favourites, track orders and get recommendations.
          </Text>
          <AppButton
            title="Shop Now"
            containerStyle={styles.btnStyle}
            titleStyle={styles.btnText}
          />
        </View>
        <Image
          source={appImages.baby}
          resizeMode="cover"
          style={styles.imgStyle}
        />
        <AppTitle
          Title="Explore Top Category"
          secondTitle="See all"
          onPress={() => navigation.navigate('AllCategories')}
        />
        <AppTitle Title="Recommended Items" secondTitle="See all" />
        <ItemCard /> */}
      {/* <FlatList data={data} renderItem={() => <ItemCard />} horizontal /> */}
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
