import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WP, appIcons, colors, family, size} from '../../utilities';
import {DistanceModal} from '../AppModal/DistanceModal';
import {CityModal} from '../AppModal/CityModal';

const RulesCard = ({...props}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => setIsVisible(!isVisible);

  const {note, title, detail, onPress} = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={appIcons.plus}
            style={styles.iconContainer}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {note && (
        <Text style={styles.noteText}>
          Note*:{' '}
          <Text style={{color: colors.r1}}>
            Cost Doubles based on the last rule added
          </Text>
        </Text>
      )}
      <Text style={styles.noteText}>{detail}</Text>
      <DistanceModal isModalVisible={isVisible} onPress={toggleModal} />
      {/* <CityModal isModalVisible={isVisible} onPress={toggleModal} /> */}
    </View>
  );
};

export {RulesCard};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: colors.w1,
    borderRadius: 8,
    paddingHorizontal: WP('4'),
    paddingVertical: WP('4'),
    marginVertical: WP('4'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: WP('2'),
  },
  iconContainer: {
    backgroundColor: colors.gr,
    width: WP('8'),
    height: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
  },
  noteText: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.normal,
    flex: 1,
    flexWrap: 'wrap',
  },
});
