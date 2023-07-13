import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {OrderData, WP, appIcons, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const SellerOfferCard = ({onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={[styles.subTitle]}>Buyer</Text>
        <Text style={[styles.subTitle]}>Buyer Offered</Text>
        <Text style={[styles.subTitle]}>Item</Text>
        <Text style={[styles.subTitle]}>Counter Offer</Text>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={() => (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.rowContainer}>
              <Text style={styles.idStyle}>Ali</Text>
              <Text style={styles.textStyle}>1000</Text>
              <Text style={[styles.textStyle]}>2</Text>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={appIcons.plus}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <AppDivider
              lineStyle={[styles.lineStyle, {backgroundColor: colors.p6}]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export {SellerOfferCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: WP('4'),
    backgroundColor: colors.w1,
    marginVertical: WP('5'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.p5,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: WP('4'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_bold,
    fontSize: size.medium,
  },
  subTitle: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    // marginRight: WP('2'),
  },
  lineStyle: {
    backgroundColor: colors.p5,
  },
  idStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    // marginRight: WP('9'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    // marginLeft: WP('5'),
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  iconContainer: {
    width: WP('8'),
    height: WP('8'),
    alignItems: 'center',
    backgroundColor: colors.gr,
    justifyContent: 'center',
    borderRadius: WP('4'),
  },
});
