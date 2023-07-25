import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {HP, WP, colors, family, size} from '../../utilities';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const ImagePickerModal = ({
  show,
  onPressHide,
  onPressGallery,
  onPressCamera,
}) => {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onPressCamera} style={styles.cameraBtn}>
            {/* <AntDesign size={30} color={'grey'} name="camerao" /> */}
            <Text style={styles.btnText}>Take Image from Camera</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
            {/* <AntDesign size={30} color={'grey'} name="picture" /> */}
            <Text style={styles.btnText}>Pick Image from Gallery</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  modalContainer: {
    justifyContent: 'center',
    backgroundColor: colors.w,
    paddingVertical: WP('7'),
    borderRadius: WP('5'),
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.b1,
    width: '100%',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    paddingTop: HP('1'),
  },
  cameraBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
    paddingBottom: HP('1'),
    paddingTop: 0,
  },
  btnText: {
    fontSize: size.xsmall,
    color: colors.b1,
    fontFamily: family.workSans_extraBold,
    marginLeft: 10,
  },
});

export {ImagePickerModal};
