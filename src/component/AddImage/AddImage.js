import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AddImage = ({title, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <TouchableOpacity style={styles.imgCon} onPress={onPress}>
        <Image
          source={appIcons.addImage}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>Add Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AddImage};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: WP('3'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    marginVertical: WP('1.5'),
  },
  textStyle: {
    color: colors.p4,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    textDecorationLine: 'underline',
    marginTop: WP('6'),
  },
  imgCon: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.p4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('30'),
  },
  iconStyle: {
    width: WP('8'),
    height: WP('8'),
  },
});
