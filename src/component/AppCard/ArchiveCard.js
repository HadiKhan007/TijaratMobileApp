import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BASE_URL_IMG, WP, colors, family, size} from '../../utilities';

const ArchiveCard = ({item, data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: BASE_URL_IMG + data[0]?.data[0]?.thumbnailImage}}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.titleStyle}>
          {data[item]?.data[0]?.name ? data[item]?.data[0]?.name : '-'}
        </Text>
        <Text style={styles.priceText}>
          Rs{' '}
          <Text style={styles.numText}>
            {data[item]?.data[0]?.price ? data[item]?.data[0]?.price : 'Empty'}
          </Text>
        </Text>
        <Text style={styles.textStyle}>
          Status:
          {data[item]?.data[0]?.isDeleted ? 'delete' : '-'}
        </Text>
      </View>
    </View>
  );
};

export {ArchiveCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 5,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: WP('3'),
    marginVertical: WP('1.5'),
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  subStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.xsmall,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('1'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('22'),
    height: WP('20'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WP('4'),
  },
  imgStyle: {
    width: WP('22'),
    height: WP('18'),
  },
  priceText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  numText: {
    color: colors.p2,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    width: WP('45'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
    marginRight: WP('2'),
  },
});
