import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const DeliveryCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>
          House number, house name, streat name, city/town, Country name.
        </Text>
        <Image
          source={appIcons.forwardArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </View>
      <AppDivider />
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>
          Order No:
          <Text style={styles.innerText}> 123456789</Text>
        </Text>
        <Image
          source={appIcons.forwardArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </View>
      <AppDivider />
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>
          Payment:
          <Text style={styles.innerText}> COD</Text>
        </Text>
        <Image
          source={appIcons.forwardArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </View>
      <AppDivider />
      <View style={styles.rowContainer}>
        <Text style={styles.leftText}>
          Phone no:
          <Text style={styles.innerText}> 123456789</Text>
        </Text>
        <Image
          source={appIcons.forwardArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export {DeliveryCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('2'),
    paddingVertical: WP('4'),
    backgroundColor: colors.w2,
    borderRadius: 10,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    color: colors.p3,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
    width: '90%',
  },
  innerText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
  },

  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    alignSelf: 'center',
  },
});
