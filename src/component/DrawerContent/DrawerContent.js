/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {drawerData} from '../../utilities';
import {AppLoader} from '../AppModal/AppLoader';
import {DrawerBar} from '../DrawerBar/DrawerBar';
import styles from './styles';

const DrawerContent = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  //   const LogoutUser = () => {
  //     try {
  //       navigation.closeDrawer();
  //       setLoading(true);

  //       const cbSuccess = () => {
  //         setLoading(false);
  //         dispatch({
  //           type: LOGOUT_REQUEST_SUCCESS,
  //           payload: null,
  //         });
  //         navigation.replace('Auth');
  //       };

  //       const cbFailure = () => {
  //         setLoading(false);
  //         dispatch({
  //           type: LOGOUT_REQUEST_SUCCESS,
  //           payload: null,
  //         });
  //         navigation.replace('Auth');
  //       };

  //       dispatch(destroyFcmTokenRequest(token, cbSuccess, cbFailure));
  //     } catch (error) {
  //       setLoading(true);
  //     }
  //   };
  const onPressBar = item => {
    navigation.closeDrawer();
    // switch (item?.id) {
    //   case 0:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 1:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 2:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 3:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 4:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 5:
    //     navigation.navigate('ClientResourcesStack', {screen: 'ScheduleCall'});
    //     break;
    //   case 6:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 7:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 8:
    //     navigation.navigate(item?.onPress);
    //     break;
    //   case 10:
    //     navigation.navigate('OtherScreens', {screen: 'PrivacyPolicy'});
    //     break;
    //   case 11:
    //     navigation.navigate('OtherScreens', {screen: 'TermsConditions'});
    //     break;
    //   default:
    //     return;
    // }
  };

  const renderItem = ({item}) => (
    <DrawerBar
      item={item}
      onPress={() => {
        onPressBar(item);
      }}
    />
  );
  return (
    <View style={styles.rootContainer}>
      <View style={styles.firstContainer}>
        <Text style={styles.textStyle} numberOfLines={3}>
          Ali Haider
        </Text>
      </View>
      <View style={styles.secondContainer}>
        {/* <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}> */}
        <FlatList
          data={drawerData}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) => item + index.toString()}
          // ListFooterComponent={
          //   <DrawerBar
          //     item={{title: 'LogOut', leftIcon: appIcons.logOut}}
          //     onPress={() => {
          //       //   LogoutUser();
          //     }}
          //   />
          // }
          // ListFooterComponentStyle={styles.listFooterComponentStyle}
        />
      </View>
      <AppLoader loading={loading} />
    </View>
  );
};

export {DrawerContent};
