import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {appIcons, WP} from '../../utilities';
import {TopHeader} from '../AppHeader/TopHeader';
import {FilterBar} from '../AppBar/FilterBar';

const FilterModal = ({isModalVisible, onPress}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0.5}
      swipeDirection={['left', 'right']}
      onSwipeComplete={onPress}
      statusBarTranslucent={true}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={styles.modalContainer}>
      <View style={styles.mainContainer}>
        <TopHeader
          iconName={appIcons.crossIcon}
          title="Filter"
          rightText="Clear"
          onPress={onPress}
        />
        <FilterBar />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '80%',
    alignSelf: 'flex-end',
    borderTopStartRadius: WP('10'),
    paddingHorizontal: WP('4'),
    paddingVertical: WP('10'),
  },
  iconStyle: {
    width: WP('7'),
    height: WP('7'),
  },
});

export {FilterModal};
