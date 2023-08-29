/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {TaskInput} from './TaskInput';

const VariationsInput = ({title, placeholder1, placeholder2}) => {
  const [items, setItems] = useState([
    {
      id: 0,
      field: 'size',
      variations: [
        {
          id: 0,
          value: '',
        },
      ],
    },
    {
      id: 1,
      field: 'size',
      variations: [
        {
          id: 0,
          value: '',
        },
      ],
    },
  ]);

  const addItem = () => {
    setItems([...items, {}]);
  };

  const removeItem = index => {
    if (items.length > 1) {
      const updatedItems = items.filter((item, i) => i !== index);
      setItems(updatedItems);
    }
  };

  const onAddField = itemId => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            variations: [
              ...item.variations,
              {
                id: item.variations.length,
                value: '',
              },
            ],
          };
        }
        return item;
      });
    });
  };

  const onRemoveField = (itemId, selectedId) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            variations: item.variations.filter(
              variation => variation.id !== selectedId,
            ),
          };
        }
        return item;
      });
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity style={styles.imgCon} onPress={addItem}>
          <Image
            source={appIcons.plus}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {items.map((item, index) => (
        <View key={index}>
          <TaskInput
            placeholder={placeholder1}
            placeholderTextColor={colors.p2}
            containerStyle={styles.inputCon2}
          />

          {item.variations.map(ele => {
            return (
              <View style={styles.rowContainer}>
                <TaskInput
                  placeholder={placeholder2}
                  placeholderTextColor={colors.p2}
                  containerStyle={styles.inputCon}
                />
                <TouchableOpacity
                  onPress={() => onRemoveField(item.id, ele.id)}
                  style={styles.imgCon2}>
                  <Image
                    source={appIcons.neg}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onAddField(item.id)}
                  style={styles.imgCon2}>
                  <Image
                    source={appIcons.plus}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ))}

      <TouchableOpacity
        style={styles.removeCon}
        onPress={() => removeItem(items.length - 1)}
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
