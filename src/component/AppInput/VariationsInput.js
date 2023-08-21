/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {TaskInput} from './TaskInput';

const VariationsInput = ({title, placeholder1, placeholder2}) => {
  const [items, setItems] = useState([
    <View>
      <TaskInput
        placeholder={placeholder1}
        placeholderTextColor={colors.p2}
        containerStyle={styles.inputCon2}
      />
      <View style={styles.rowContainer}>
        <TaskInput
          placeholder={placeholder2}
          placeholderTextColor={colors.p2}
          containerStyle={styles.inputCon}
        />
        <TouchableOpacity style={styles.imgCon2}>
          <Image
            source={appIcons.neg}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgCon2}>
          <Image
            source={appIcons.plus}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>,
  ]);

  const handleRemoveItem1 = () => {
    setItems(items.slice(0, items.length - 1));
  };
  const handleRemoveItem2 = () => {
    setItems(items.slice(0, items.length - 1));
  };
  const handleAddItem1 = () => {
    setItems(prevComponents => [
      ...prevComponents,
      <>
        <TaskInput
          placeholder={placeholder1}
          placeholderTextColor={colors.p2}
          containerStyle={styles.inputCon2}
        />

        <View style={styles.rowContainer}>
          <TaskInput
            placeholder={placeholder2}
            placeholderTextColor={colors.p2}
            containerStyle={styles.inputCon}
          />
          <TouchableOpacity
            style={styles.imgCon2}
            onPress={handleRemoveItem2}
            disabled={items.length === 1}>
            <Image
              source={appIcons.neg}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgCon2} onPress={handleAddItem2}>
            <Image
              source={appIcons.plus}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </>,
    ]);
  };
  const handleAddItem2 = () => {
    setItems(prevComponents => [
      ...prevComponents,

      <View style={styles.rowContainer}>
        <TaskInput
          placeholder={placeholder2}
          placeholderTextColor={colors.p2}
          containerStyle={styles.inputCon}
        />
        <TouchableOpacity style={styles.imgCon2}>
          <Image
            source={appIcons.neg}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgCon2}>
          <Image
            source={appIcons.plus}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>,
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity style={styles.imgCon} onPress={handleAddItem1}>
          <Image
            source={appIcons.plus}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {items.map(item => item)}
      <TouchableOpacity
        style={styles.removeCon}
        onPress={handleRemoveItem1}
        disabled={items.length === 1}>
        <Text style={styles.btnStyle}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export {VariationsInput};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: WP('2'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.p4,
    fontFamily: family.workSans_extraBold,
    fontSize: size.small,
  },
  imgCon: {
    width: WP('8'),
    height: WP('8'),
    backgroundColor: colors.gr2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCon2: {
    width: WP('8'),
    height: WP('8'),
    backgroundColor: colors.p1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('6'),
    marginLeft: WP('4'),
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  inputCon: {
    width: WP('42'),
    marginTop: 0,
    paddingTop: 0,
  },
  inputCon2: {
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
  },
  removeCon: {
    backgroundColor: colors.gr2,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('10'),
    marginVertical: WP('4'),
    borderRadius: 8,
  },
  btnStyle: {
    color: colors.w1,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
  },
});