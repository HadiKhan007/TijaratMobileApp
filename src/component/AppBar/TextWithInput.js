import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const TextWithInput = ({title, countVal, value}) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.textCon}>
        <Text style={styles.textStyle}>{countVal ? count : value}</Text>
        {countVal && (
          <View>
            <TouchableOpacity onPress={incrementCount}>
              <Image
                source={appIcons.downArrow}
                style={[styles.iconStyle, {transform: [{rotate: '180deg'}]}]}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrement}>
              <Image
                source={appIcons.downArrow}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export {TextWithInput};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP('2'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginRight: WP('2'),
  },
  textCon: {
    backgroundColor: colors.g1,
    width: '65%',
    paddingVertical: WP('3'),
    paddingHorizontal: WP('4'),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
  },
  iconStyle: {
    width: WP('3'),
    height: WP('3'),
    marginVertical: WP('0.3'),
  },
});
