import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WP, colors, family, size} from '../../utilities';
import {CancelOrderModal} from '../AppModal/CancelOrderModal';

const CancelOrderCard = () => {
  const [isVisible, setIsVisibl] = useState(false);
  const toggleModal = () => setIsVisibl(!isVisible);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {seconds > 0 && (
        <View style={styles.mainContainer}>
          <Text style={styles.textStyle}>
            If you feel like this order was made by mistake, you have 1 hour to
            cancel to order
          </Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.titleStyle}>Cancel Order</Text>
          </TouchableOpacity>
          <Text style={styles.timeStyle}>
            0 hours {minutes} minutes {seconds < 10 ? '0' : ''}
            {seconds} second
          </Text>
          <CancelOrderModal isModalVisible={isVisible} onPress={toggleModal} />
        </View>
      )}
    </>
  );
};

export {CancelOrderCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.s3,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.6},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    padding: WP('3'),
    marginVertical: WP('3'),
  },
  textStyle: {
    fontFamily: family.morkSans_regular,
    fontSize: size.xxsmall,
    color: colors.p1,
  },
  titleStyle: {
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    color: colors.p1,
    textDecorationLine: 'underline',
  },
  timeStyle: {
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
    color: colors.p1,
    alignSelf: 'center',
    marginVertical: WP('3'),
  },
});
