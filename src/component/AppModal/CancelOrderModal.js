import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {WP, appIcons, appImages, colors, family, size} from '../../utilities';
import Modal from 'react-native-modal';
import {AppTitle} from '../AppTitle/AppTitle';
import {AppButton} from '../AppButton/AppButton';

const CancelOrderModal = ({isModalVisible, onPress}) => {
  const [state, setState] = useState(false);
  return (
    <Modal onBackdropPress={onPress} isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <AppTitle
          Title="Cancel Product From Order"
          iconName={appIcons.crossIcon}
          onPress={onPress}
          mainContainer={styles.titleContainer}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => setState(!state)}>
            <Image
              source={state ? appIcons.click : appIcons.unClick}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              source={appImages.sneakers}
              style={styles.imgStyle}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textStyle}>Sony PlayStation 5</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => setState(!state)}>
            <Image
              source={state ? appIcons.click : appIcons.unClick}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              source={appImages.sneakers}
              style={styles.imgStyle}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textStyle}>Sony PlayStation 5</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => setState(!state)}>
            <Image
              source={state ? appIcons.click : appIcons.unClick}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image
              source={appImages.sneakers}
              style={styles.imgStyle}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textStyle}>Sony PlayStation 5</Text>
        </View>
        <View style={styles.row2Container}>
          <AppButton
            title="Cancel"
            onPress={onPress}
            containerStyle={styles.btn1Style}
          />
          <AppButton
            title="No"
            onPress={onPress}
            containerStyle={styles.btn2Style}
            titleStyle={styles.noText}
          />
        </View>
      </View>
    </Modal>
  );
};

export {CancelOrderModal};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    backgroundColor: colors.w1,
    width: '100%',
    height: '70%',
    alignSelf: 'center',
    borderRadius: 8,
    padding: WP('5'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('3'),
  },
  row2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('3'),
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xsmall,
  },
  btn1Style: {
    width: WP('37'),
  },
  btn2Style: {
    width: WP('37'),
    backgroundColor: colors.w1,
    borderWidth: 2,
    borderColor: colors.p1,
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('18'),
    height: WP('18'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('4'),
  },
  imgStyle: {
    width: WP('15'),
    height: WP('15'),
  },
  noText: {
    color: colors.p1,
    textAlign: 'center',
    fontFamily: family.workSans_medium,
    marginLeft: WP('2'),
    fontSize: Platform.OS === 'ios' ? size.large : size.normal,
  },
});
