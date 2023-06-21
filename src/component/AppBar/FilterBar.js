import React, {Fragment} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FilterData, WP, appIcons, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const FilterBar = () => {
  const renderItem = ({item}) => (
    <Fragment>
      <TouchableOpacity style={styles.mainContainer}>
        <Text style={styles.test1Style}>{item.firstText}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.text2Style}>{item.secondText}</Text>
          <Image
            source={appIcons.forwardArrow}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      {item.id === 3 ? null : <AppDivider />}
    </Fragment>
  );

  return (
    <View style={styles.rootContainer}>
      <FlatList data={FilterData} renderItem={renderItem} />
      <AppDivider lineStyle={styles.lineStyle} />
      <View style={[styles.mainContainer, {marginVertical: WP('2')}]}>
        <Text style={styles.test1Style}>View</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={{marginHorizontal: WP('3')}}>
            <Image
              source={appIcons.dashboard}
              style={styles.icon2Style}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={appIcons.viewIcon}
              style={styles.icon2Style}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <AppDivider lineStyle={styles.lineStyle} />
    </View>
  );
};

export {FilterBar};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: WP('10'),
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  test1Style: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2Style: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
    marginHorizontal: WP('1'),
  },
  iconStyle: {
    width: WP('3'),
    height: WP('3'),
  },
  lineStyle: {
    height: WP('1'),
    backgroundColor: colors.p6,
    marginTop: WP('3'),
  },
  icon2Style: {
    width: WP('5'),
    height: WP('5'),
  },
});
