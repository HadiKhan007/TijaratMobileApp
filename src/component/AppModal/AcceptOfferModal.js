import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import Modal from 'react-native-modal';
import {AppTitle} from '../AppTitle/AppTitle';
import {AppButton} from '../AppButton/AppButton';

const AcceptOfferModal = ({isModalVisible, onPress}) => {
  return (
    <Modal onBackdropPress={onPress} isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <AppTitle
          Title="Accept this offer"
          iconName={appIcons.crossIcon}
          onPress={onPress}
          mainContainer={styles.titleContainer}
        />
        <Text style={styles.textStyle}>Do you want to accept this offer?</Text>
        <AppButton
          title="Accept"
          onPress={onPress}
          containerStyle={styles.cBtn}
        />
      </View>
    </Modal>
  );
};

export {AcceptOfferModal};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    backgroundColor: colors.w1,
    width: '100%',
    height: '33%',
    alignSelf: 'center',
    borderRadius: 8,
    padding: WP('3'),
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
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
    alignSelf: 'center',
    marginVertical: WP('3'),
  },
  cBtn: {
    backgroundColor: colors.gr,
    marginTop: WP('3'),
  },
});
