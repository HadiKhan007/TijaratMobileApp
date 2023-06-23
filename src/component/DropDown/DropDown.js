/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {appIcons, colors, family, size, WP} from '../../utilities';

const DropDown = ({value, data, onSelect, title, dropbg}) => {
  const [show, setShow] = useState(false);
  const onSelectedItem = item => {
    setShow(false);
    onSelect(item);
  };
  return (
    <View>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => setShow(!show)}>
        <Text style={styles.textStyle}>{value ? value?.name : 'Select'}</Text>
        <Image
          source={appIcons.downArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {show && (
        <View style={[styles.dropbg, {dropbg}]}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={String(index)}
                style={[
                  styles.dropbg,
                  {
                    width: '100%',
                    backgroundColor:
                      value.id === item.id ? colors.p6 : colors.white,
                  },
                ]}
                onPress={() => onSelectedItem(item)}>
                <Text
                  style={[
                    styles.itemStyle,
                    {color: value.id === item.id ? colors.p2 : colors.b1},
                  ]}>
                  {' '}
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('2.5'),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.p2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.xsmall,
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    // transform: [{rotate: '-180deg'}],
  },
  dropbg: {
    width: '94%',
    alignSelf: 'center',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    backgroundColor: colors.w1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  itemStyle: {
    color: colors.white,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginVertical: WP('3'),
    marginLeft: WP('10'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    marginVertical: WP('2'),
    marginTop: WP('3'),
    fontSize: size.xsmall,
  },
});

export {DropDown};
