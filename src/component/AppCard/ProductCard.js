import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, appImages, colors, family, size} from '../../utilities';
import ToggleSwitch from 'toggle-switch-react-native';

const ProductCard = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={appImages.sneakers}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>
            Brilliant things happen,When you buy ...
          </Text>
          <View style={styles.iconContainer}>
            <Image source={appIcons.downArrow} style={styles.iconStyle} />
          </View>
        </View>
        <Text style={styles.textStyle}>Electronic</Text>
        <Text style={styles.priceText}>
          Rs <Text style={styles.numText}>14,000.00</Text>
        </Text>
        <Text style={styles.textStyle}>Stock: 03</Text>
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
    paddingVertical: WP('2'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
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
