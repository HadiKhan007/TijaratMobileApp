import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appImages, colors, family, size} from '../../utilities';

const WishCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={appImages.sneakers}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.titleStyle}>
        Brilliant things happen, When you buy from real person.
      </Text>
    </View>
  );
};

export {WishCard};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('32'),
    height: WP('22'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: WP('22'),
    height: WP('22'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    flexWrap: 'wrap',
    flex: 1,
  },
});
