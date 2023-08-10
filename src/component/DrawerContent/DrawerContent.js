import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {AccountCard, AppLoader, DrawerBar} from '..';
import {BASE_URL_IMG, appIcons, drawerData} from '../../utilities';
import styles from './styles';
import {useSelector} from 'react-redux';

const DrawerContent = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state => state.auth);

  const onPressBar = item => {
    navigation.closeDrawer();
    switch (item?.id) {
      case 0:
        navigation.navigate(item?.onPress);
        break;
      case 1:
        navigation.navigate(item?.onPress);
        break;
      case 2:
        navigation.navigate(item?.onPress);
        break;
      case 3:
        navigation.navigate(item?.onPress);
        break;
      case 4:
        navigation.navigate(item?.onPress);
        break;
      case 5:
        navigation.navigate(item?.onPress);
        break;
      case 6:
        navigation.navigate(item?.onPress);
        break;
      case 7:
        navigation.navigate(item?.onPress);
        break;
      default:
        return;
    }
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
      <AccountCard
        imageURL={BASE_URL_IMG + user?.user?.seller?.shopImageUrl}
        title={
          user
            ? user.user.seller.firstName + ' ' + user.user.seller.lastName
            : 'Login Now'
        }
        email={user ? user.user.seller.email : 'no'}
      />
      <View style={styles.secondContainer}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <FlatList
            data={drawerData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            style={styles.flatlistStyle}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={(item, index) => item + index.toString()}
          />
        </ScrollView>
      </View>
      <AppLoader loading={loading} />
    </View>
  );
};

export {DrawerContent};
