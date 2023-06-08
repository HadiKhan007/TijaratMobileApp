import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  WP,
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../../../../utilities';
import {
  AppButton,
  AppTitle,
  HCategoryCard,
  ItemCard,
} from '../../../../../component';

const Categories = ({navigation}) => {
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
  const renderItem = ({item}) => <HCategoryCard item={item} />;
  const renderItemCard = ({item}) => <ItemCard item={item} />;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: WP('54'),
        }}>
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
          resizeMode="cover"
          style={styles.imgStyle}
        />
        <AppTitle
          Title="Explore Top Category"
          secondTitle="See all"
          onPress={() => navigation.navigate('AllCategories')}
        />
        <FlatList
          data={HCategoryData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index.toString()}
          horizontal={true}
          contentContainerStyle={{
            flexDirection: 'row',
            // flexWrap: 'wrap',
          }}
        />
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
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  fContainer: {
    backgroundColor: colors.s1,
    height: WP('50'),
    width: '100%',
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2'),
  },
  titleStyle: {
    color: colors.s2,
    fontSize: size.medium,
    fontFamily: family.workSans_bold,
  },
  subTitle: {
    color: colors.s2,
    fontSize: size.normal,
    fontFamily: family.workSans_medium,
    marginVertical: WP('2'),
  },
  btnStyle: {
    backgroundColor: colors.s2,
    width: '28%',
    borderRadius: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('4'),
  },
  btnText: {
    color: colors.w1,
    fontSize: size.tiny,
    fontFamily: family.workSans_medium,
  },
  imgStyle: {
    width: '100%',
    height: '30%',
  },
});
