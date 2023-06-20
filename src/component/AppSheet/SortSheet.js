/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppTitle} from '../AppTitle/AppTitle';
import {SheetData, WP, appIcons, colors} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const SortSheet = ({refRBSheet}) => {
  const renderItem = ({item}) => (
    <>
      <TouchableOpacity style={styles.rowContainer}>
        <Image source={appIcons.click} style={styles.iconStyle} />
        <Text style={styles.titleStyle}>{item?.title}</Text>
      </TouchableOpacity>
      <AppDivider />
    </>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={WP('100')}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            backgroundColor: colors.w2,
            borderTopRightRadius: WP('10'),
            borderTopLeftRadius: WP('10'),
            padding: WP('2'),
            paddingHorizontal: WP('3'),
          },
        }}>
        <View style={styles.mainContainer}>
          <AppTitle Title="Sort" />

          <FlatList data={SheetData} renderItem={renderItem} />
        </View>
      </RBSheet>
    </View>
  );
};

export {SortSheet};

const styles = StyleSheet.create({
  mainContainer: {},
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('3'),
  },
  titleStyle: {
    marginHorizontal: WP('3'),
  },
});
