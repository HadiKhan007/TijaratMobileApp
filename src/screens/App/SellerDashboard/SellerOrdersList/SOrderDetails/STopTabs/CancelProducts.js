import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {WP, appIcons, colors, family, size} from '../../../../../../utilities';
import {ActiveProductCard} from '../../../../../../component';

const CancelProducts = () => {
  const [state, setstate] = useState(false);
  return (
    <SafeAreaView style={!state ? styles.imgContainer : styles.rootContainer}>
      {!state ? (
        <View>
          <Image
            style={styles.imgStyle}
            source={appIcons.empty}
            resizeMode="contain"
          />
          <Text style={styles.titleStyle}>Empty</Text>
        </View>
      ) : (
        <ActiveProductCard />
      )}
      {/* <ActiveProductCard />
        <ActiveProductCard /> */}
    </SafeAreaView>
  );
};

export default CancelProducts;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: WP('70'),
    height: WP('50'),
  },
  titleStyle: {
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
    color: colors.p1,
    alignSelf: 'center',
  },
});
