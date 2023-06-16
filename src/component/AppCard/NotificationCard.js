import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const NotificationCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Image
          source={appIcons.promotion}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.dateText}>19 Oct, 12:25am</Text>
        <Text style={styles.titleStyle}>
          Brilliant things happen, When you buy{'\n'} from...
        </Text>
        <Text style={styles.address}>
          House number, house name, streat name,{'\n'} city/town, country
          name...
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={appIcons.crossIcon} style={styles.crossIcon} />
      </TouchableOpacity>
    </View>
  );
};

export {NotificationCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w2,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2'),
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.p6,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: colors.gr,
    width: WP('12'),
    height: WP('12'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: WP('4'),
  },
  iconStyle: {
    width: WP('8'),
    height: WP('8'),
    tintColor: colors.w1,
  },
  dateText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.tiny,
  },
  centerContainer: {
    marginLeft: WP('3'),
    paddingVertical: WP('2'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    marginVertical: WP('2'),
    flexWrap: 'wrap',
  },
  address: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    marginVertical: WP('1'),
  },
  crossIcon: {
    width: WP('6'),
    height: WP('6'),
    tintColor: colors.r1,
    marginVertical: WP('2'),
  },
});
