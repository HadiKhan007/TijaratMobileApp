import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const ClickButton = ({title}) => {
  const [state, setState] = useState(false);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => setState(!state)}>
      <Image
        source={state ? appIcons.click : appIcons.unClick}
        style={styles.iconStyle}
      />
      <Text style={[styles.textStyle, {color: state ? colors.p3 : colors.p2}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {ClickButton};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
  textStyle: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    marginHorizontal: WP('3'),
  },
});
