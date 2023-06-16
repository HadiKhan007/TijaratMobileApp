import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {DrawerBar} from '..';
import {drawerData} from '../../utilities';
import styles from './styles';

const DrawerContent = ({navigation}) => {
  // const [loading, setLoading] = useState(false);

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
        navigation.navigate('ClientResourcesStack', {screen: 'ScheduleCall'});
        break;
      case 6:
        navigation.navigate(item?.onPress);
        break;
      case 7:
        navigation.navigate(item?.onPress);
        break;
      case 8:
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
      <View style={styles.firstContainer}>
        <Text style={styles.textStyle} numberOfLines={3}>
          Ali
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.titleText}>Your Account</Text>
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
      {/* <AppLoader loading={loading} /> */}
    </View>
  );
};

export {DrawerContent};
