import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import {
  BASE_URL_IMG,
  WP,
  appIcons,
  appImages,
  colors,
  family,
  size,
} from '../../utilities';
import ToggleSwitch from 'toggle-switch-react-native';

const ProductCard = ({apiData, index}) => {
  const [switchOn, setSwitchOn] = useState(false);
  const [state, setState] = useState(false);

  console.log('apiData', apiData[0].pictures);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: BASE_URL_IMG + apiData[index].pictures}}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>{apiData[index].name}</Text>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setState(!state)}>
            <Image
              source={state ? appIcons.cross : appIcons.dots}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>{apiData[index]?.category?.name}</Text>
        <Text style={styles.priceText}>
          Rs <Text style={styles.numText}>{apiData[index].price}</Text>
        </Text>
        <Text style={styles.textStyle}>Stock: {apiData[index].stock}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.textStyle}>Status:</Text>
          <ToggleSwitch
            isOn={switchOn}
            onColor={colors.gr}
            offColor={colors.p2}
            size="small"
            onToggle={() => setSwitchOn(!switchOn)}
          />
        </View>
      </View>
    </View>
  );
};

export {ProductCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    paddingHorizontal: WP('3'),
    paddingVertical: WP('4'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
    marginVertical: WP('2'),
    flexDirection: 'row',
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('30'),
    height: WP('28'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WP('2'),
  },
  imgStyle: {
    width: WP('22'),
    height: WP('22'),
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.xsmall,
    width: WP('45'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
    marginRight: WP('2'),
  },
  priceText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  numText: {
    color: colors.p2,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: WP('2'),
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
  iconContainer: {
    backgroundColor: colors.gr,
    width: WP('10'),
    height: WP('10'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('5'),
  },
});
