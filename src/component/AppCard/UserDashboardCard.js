/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  UserDashboardData,
  WP,
  appIcons,
  colors,
  family,
  size,
} from '../../utilities';

const UserDashboardCard = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={UserDashboardData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item?.onPress)}
            style={[
              styles.rowContainer,
              {justifyContent: 'space-between', marginVertical: WP('4')},
            ]}>
            <View style={styles.rowContainer}>
              <Image
                source={item?.leftIcon}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.textStyle}>{item?.title}</Text>
            </View>
            <Image
              source={appIcons.forwardArrow}
              style={styles.rigthIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export {UserDashboardCard};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: colors.w1,
    padding: WP('3'),
    borderRadius: 8,
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_semiBold,
    fontSize: size.normal,
    marginHorizontal: WP('3'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rigthIconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
});
