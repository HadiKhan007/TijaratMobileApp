import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BASE_URL_IMG,
  WP,
  appImages,
  colors,
  family,
  size,
} from '../../utilities';
import moment from 'moment';

const SellerOfferCard = ({data, onPress, index}) => {
  const currentDate = new Date(data[0]?.createdAt);
  const formattedDate = moment(currentDate).format('MMMM Do YYYY, h:mm');

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.rowContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{uri: BASE_URL_IMG + data[0]?.item?.thumbnailImage}}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>{data[0]?.item?.name} </Text>
          <Text style={styles.textStyle}>
            Buyer name: {data[0].buyer?.firstName}
          </Text>
          <Text style={styles.textStyle}>
            Buyer Offered: <Text style={styles.priceText}>Rs</Text>{' '}
            {data[0]?.priceOfferedFromBuyer}
          </Text>
          <Text style={styles.textStyle}>Date: {formattedDate}</Text>
          <Text style={styles.textStyle}>Quantity: {data[0]?.quantity}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.statusText}>Status: {data[0]?.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {SellerOfferCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
