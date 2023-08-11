import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BASE_URL_IMG,
  WP,
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../utilities';

const ActiveProductCard = ({data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: BASE_URL_IMG
                ? BASE_URL_IMG +
                  data?.order[0]?.orders[0]?.product?.thumbnailImage
                : BASE_URL_IMG,
            }}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.secondCon}>
          <Text style={styles.titleStyle}>
            {data?.order[0]?.orders[0]?.product?.name}
          </Text>
          <Text style={styles.idText}>
            {data?.order[0]?.orders[0]?.childOrderNumber}
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.priceText}>
              Rs{' '}
              <Text style={styles.numText}>
                {data?.order[0]?.orders[0]?.price}
              </Text>
            </Text>
            <Text style={styles.qtyStyle}>
              Qty: {data?.order[0]?.orders[0]?.quantity}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.paymentStyle}>
          Payment: {data?.order[0]?.orders[0]?.seller?.paymentMethods[0].method}
        </Text>
        <Text style={styles.priceText}>
          <Text style={styles.paymentStyle}>Total: </Text>
          Rs{' '}
          <Text style={styles.numText}>{data?.order[0]?.orders[0]?.total}</Text>
        </Text>
      </View>
    </View>
  );
};

export {ActiveProductCard};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.6},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.w2,
    padding: WP('3'),
    marginVertical: WP('2'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('30'),
    height: WP('28'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: WP('22'),
    height: WP('22'),
  },
  secondCon: {
    marginLeft: WP('3'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    width: WP('55'),
  },
  priceText: {
    color: colors.p3,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  numText: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
  },
  idText: {
    color: colors.gr1,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
    marginVertical: WP('2'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP('1'),
  },
  qtyStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginRight: WP('2.5'),
  },
  paymentStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
  },
});
