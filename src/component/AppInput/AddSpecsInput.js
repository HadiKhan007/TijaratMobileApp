/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {TaskInput} from './TaskInput';

const AddSpecsInput = ({
  title,
  placeholder1,
  placeholder2,
  onPressAdd,
  onPressRemove,
}) => {
  const [items, setItems] = useState([
    <View style={styles.rowContainer}>
      <TaskInput
        placeholder={placeholder1}
        placeholderTextColor={colors.p2}
        containerStyle={styles.inputCon}
      />
      <TaskInput
        placeholder={placeholder2}
        placeholderTextColor={colors.p2}
        containerStyle={styles.inputCon}
      />
    </View>,
  ]);

  const handleRemoveItem = () => {
    setItems(items.slice(0, items.length - 1));
  };
  const handleAddItem = () => {
    setItems(prevComponents => [
      ...prevComponents,
      <View style={styles.rowContainer}>
        <TaskInput
          placeholder={placeholder1}
          placeholderTextColor={colors.p2}
          containerStyle={styles.inputCon}
        />
        <TaskInput
          placeholder={placeholder2}
          placeholderTextColor={colors.p2}
          containerStyle={styles.inputCon}
        />
      </View>,
    ]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity style={styles.imgCon} onPress={handleAddItem}>
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
        onPress={handleRemoveItem}
        disabled={items.length === 1}>
        <Text style={styles.btnStyle}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AddSpecsInput};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: WP('2'),
  },
  rowContainer: {
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
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  inputCon: {
    width: WP('42'),
    marginLeft: WP('3'),
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
