import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WP, appImages, colors, family, size} from '../../utilities';
import {AppButton} from '../AppButton/AppButton';
import {AcceptOfferModal} from '../AppModal/AcceptOfferModal';
import {RejectOfferModal} from '../AppModal/RejectOfferModal';
import {CounterOfferModal} from '../AppModal/CounterOfferModal';

const OfferDetailCard = () => {
  const [isVisibleAccept, setIsVisibleAccept] = useState(false);
  const [isVisibleReject, setIsVisibleReject] = useState(false);
  const [isVisibleCO, setIsVisibleCO] = useState(false);
  const toggleAcceptModal = () => setIsVisibleAccept(!isVisibleAccept);
  const toggleRejectModal = () => setIsVisibleReject(!isVisibleReject);
  const toggleCO = () => setIsVisibleCO(!isVisibleCO);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={appImages.sneakers}
            style={styles.imgStyle}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.titleStyle}>
            Brilliant things happen, When you...
          </Text>
          <Text style={styles.textStyle}>Buyer name: M,Adnan Akhtar</Text>
          <Text style={styles.textStyle}>
            Buyer Offered: <Text style={styles.priceText}>Rs</Text> 2000
          </Text>
          <Text style={styles.textStyle}>Date: June 20,2022 06:30pm</Text>
          <Text style={styles.textStyle}>Quantity: 02</Text>
        </View>
      </View>
      <View>
        <Text style={styles.statusText}>
          Status: Counter offer rejected by buyer
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <AppButton
          title="Accept"
          containerStyle={styles.btnStyle}
          onPress={toggleAcceptModal}
        />
        <AppButton
          title="Reject"
          containerStyle={styles.rejectBtn}
          titleStyle={styles.rBtnText}
          onPress={toggleRejectModal}
        />
      </View>
      <AppButton
        title="Counter Offer"
        containerStyle={styles.cBtn}
        onPress={toggleCO}
      />
      <AcceptOfferModal
        isModalVisible={isVisibleAccept}
        onPress={toggleAcceptModal}
      />
      <RejectOfferModal
        isModalVisible={isVisibleReject}
        onPress={toggleRejectModal}
      />
      <CounterOfferModal isModalVisible={isVisibleCO} onPress={toggleCO} />
    </View>
  );
};

export default OfferDetailCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
    padding: WP('4'),
    marginVertical: WP('3'),
  },
  imgContainer: {
    backgroundColor: colors.pc,
    width: WP('30'),
    height: WP('32'),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: WP('26'),
    height: WP('26'),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    width: WP('45'),
  },
  textStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
  },
  priceText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  statusText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
    marginVertical: WP('2'),
  },
  btnStyle: {
    width: WP('40'),
  },
  rejectBtn: {
    width: WP('40'),
    borderWidth: 1,
    borderColor: colors.r1,
    backgroundColor: colors.w1,
  },
  rBtnText: {
    color: colors.r1,
    textAlign: 'center',
    fontFamily: family.workSans_medium,
  },
  cBtn: {
    backgroundColor: colors.gr,
    marginTop: WP('3'),
  },
});
