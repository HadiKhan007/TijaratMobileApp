import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  AccountCard,
  AppTitle,
  TopHeader,
  UserOrderCard,
} from '../../../../component';
import styles from './styles';
import {
  UserOrderData,
  appIcons,
  appImages,
  colors,
} from '../../../../utilities';

const UOrders = ({navigation}) => {
  const [data, setData] = useState(UserOrderData);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <ImageBackground
            style={styles.mainContainer}
            source={appImages.curveImg}
            resizeMode="cover">
            <TopHeader
              iconName={appIcons.backArrow}
              title="User Dashboard"
              titleStyle={{color: colors.w1}}
              iconContainer={{colors: colors.p2}}
            />
            <AccountCard
              iconName={appIcons.person}
              title="Hamza Habib"
              email="Madison, United State..."
              titleStyle={{color: colors.w1}}
              mailStyle={{color: colors.w1}}
              iconStyle={styles.iconStyle}
              mainContainer={{marginTop: 40}}
            />
          </ImageBackground>
        </View>
        <View style={styles.secondContainer}>
          <AppTitle Title="My Orders" mainContainer={styles.titleContainer} />
          <UserOrderCard navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UOrders;
