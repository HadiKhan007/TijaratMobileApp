import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WP, appIcons, colors, family, size} from '../../utilities';
import Modal from 'react-native-modal';
import {AppTitle} from '../AppTitle/AppTitle';
import {AppButton} from '../AppButton/AppButton';

const RejectOfferModal = ({isModalVisible, onPress}) => {
  return (
    <Modal onBackdropPress={onPress} isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <AppTitle
          Title="Reject this offer"
          iconName={appIcons.crossIcon}
          onPress={onPress}
          mainContainer={styles.titleContainer}
        />
        <Text style={styles.textStyle}>Do you want to reject this offer?</Text>
        <AppButton
          title="Reject"
          containerStyle={styles.btnStyle}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
};

export {RejectOfferModal};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    backgroundColor: colors.w1,
    width: '100%',
    height: '37%',
    alignSelf: 'center',
    borderRadius: 8,
    padding: WP('5'),
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
  btnStyle: {
    backgroundColor: colors.r1,
    marginVertical: WP('3'),
  },
});
