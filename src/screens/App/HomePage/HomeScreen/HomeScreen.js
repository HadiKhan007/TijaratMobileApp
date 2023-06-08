import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import styles from './styles';
import {
  AppButton,
  AppHeader,
  AppTitle,
  ItemCard,
  SearchItem,
} from '../../../../component';
import {appIcons, appImages} from '../../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HomeTopTabs from '../../../../navigation/stacks/TopTabs/HomeTopTabs';
import {FloatingAction} from 'react-native-floating-action';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* <KeyboardAwareScrollView
        style={styles.main}
        enableOnAndroid
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}> */}
      {/* <View style={styles.mainContainer}> */}
      <View style={styles.mainContainer}>
        <AppHeader />
        <SearchItem />
      </View>
      <HomeTopTabs />

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
