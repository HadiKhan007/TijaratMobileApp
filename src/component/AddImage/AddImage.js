import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';

const AddImage = ({onPress, selectedImage}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.imgCon} onPress={onPress}>
        <Image
          source={selectedImage ? {uri: selectedImage.uri} : appIcons.addImage}
          style={selectedImage ? styles.imgStyle : styles.iconStyle}
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
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.w2,
    padding: WP('3'),
    borderRadius: 10,
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
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: WP('30'),
  },
  iconStyle: {
    width: WP('8'),
    height: WP('8'),
  },
  imgStyle: {
    width: '100%',
    height: '30%',
  },
});
