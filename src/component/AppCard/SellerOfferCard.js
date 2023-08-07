import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, appImages, colors, family, size} from '../../utilities';

const SellerOfferCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.rowContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={appImages.sneakers}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you...
          </Text>
          <Text style={styles.textStyle}>Buyer name: M,Adnan Akhtar</Text>
          <Text style={styles.textStyle}>
            Buyer Offered: <Text style={styles.priceText}>Rs</Text> 2000
          </Text>
          <Text style={styles.textStyle}>Date: June 20,2022 06:30pm</Text>
          <Text style={styles.textStyle}>Quantity: 02</Text>
        </View>
      </View>
      <View>
        <Text style={styles.statusText}>
          Status: Counter offer rejected by buyer
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {SellerOfferCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
    padding: WP('3'),
    marginVertical: WP('3'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('30'),
    height: WP('32'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WP('3'),
  },
  imgStyle: {
    width: WP('26'),
    height: WP('26'),
  },
  rowContainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    width: WP('45'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
  },
  priceText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  statusText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
    marginVertical: WP('2'),
  },
});
