import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BASE_URL_IMG,
  WP,
  appIcons,
  colors,
  family,
  size,
} from '../../utilities';
import ToggleSwitch from 'toggle-switch-react-native';

const ProductCard = ({apiData, index}) => {
  const [switchOn, setSwitchOn] = useState(false);
  const [state, setState] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    {title: 'Option 1', content: 'Content for option 1'},
    {title: 'Option 2', content: 'Content for option 2'},
    {title: 'Option 3', content: 'Content for option 3'},
  ];
  const handleOptionClick = optionIndex => {
    setSelectedOption(options[optionIndex]);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{uri: BASE_URL_IMG + apiData[index].thumbnailImage}}
          style={styles.imgStyle}
          resizeMode="cover"
        />
      </View>
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>{apiData[index].name}</Text>
          <View>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setState(!state)}>
              <Image
                source={state ? appIcons.cross : appIcons.dots}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {state && (
              <View style={styles.viewCon}>
                <TouchableOpacity
                  style={styles.rowContainer2}
                  activeOpacity={0.8}
                  onPress={() => Alert.alert('Clone button pressed')}>
                  <Image
                    source={appIcons.cloneIcone}
                    style={[styles.iconStyle2]}
                    resizeMode="contain"
                  />
                  <Text style={styles.viewText}>Clone</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.rowContainer2}
                  activeOpacity={0.8}
                  onPress={() => Alert.alert('Edit button pressed')}>
                  <Image
                    source={appIcons.edit2}
                    style={[styles.iconStyle2]}
                    resizeMode="contain"
                  />
                  <Text style={styles.viewText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.rowContainer2]}
                  activeOpacity={0.8}
                  onPress={() => Alert.alert('Delete button pressed')}>
                  <Image
                    source={appIcons.delete2}
                    style={[styles.iconStyle2]}
                    resizeMode="contain"
                  />
                  <Text style={styles.viewText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
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
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 5,
    marginVertical: WP('2'),
    flexDirection: 'row',
    zIndex: 0,
  },
  imgContainer: {
    width: WP('30'),
    height: WP('30'),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: WP('2'),
  },
  imgStyle: {
    width: '100%',
    height: WP('30'),
    borderRadius: 16,
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
  viewCon: {
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: -WP('24'),
    right: WP('3'),
    backgroundColor: colors.w1,
    width: WP('27'),
    paddingHorizontal: WP('1'),
  },
  viewText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('1'),
    paddingHorizontal: WP('3'),
  },
  iconStyle2: {
    width: WP('4'),
    height: WP('4'),
    alignSelf: 'center',
    marginRight: WP('3'),
  },
});
