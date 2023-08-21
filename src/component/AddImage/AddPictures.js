import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {
  BASE_URL_IMG,
  WP,
  appIcons,
  colors,
  family,
  size,
} from '../../utilities';
import ImagePicker from 'react-native-image-crop-picker'; // Import the library

const {width} = Dimensions.get('window');

const AddPictures = ({images, onImagesSelected, onDeleteImage}) => {
  const handleImageSelect = async () => {
    try {
      const selectedImages = await ImagePicker?.openPicker({
        multiple: true,
        mediaType: 'photo',
      });

      // Call the callback function with selected images
      onImagesSelected(selectedImages);
    } catch (error) {
      Alert.alert('Error', error.message); // Display the error message
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {images ? (
          images?.map((imageObject, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={{uri: imageObject ? imageObject?.path : null}}
                style={styles.image}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => onDeleteImage(index)}>
                <Image
                  source={appIcons.delete}
                  style={styles.deleteIconImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Image
            source={appIcons.addImage}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        )}
      </View>
      <TouchableOpacity onPress={handleImageSelect}>
        <Text style={styles.textStyle}>Add Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.w2,
    padding: WP('2'),
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: WP('2'),
    margin: WP('2'),
  },
  deleteIcon: {
    position: 'absolute',
    bottom: WP('3'),
    right: WP('4'),
    backgroundColor: colors.r1, // Adjust background color as needed
    padding: 4,
    borderRadius: WP('3.5'),
    width: WP('7'),
    height: WP('7'),
  },
  deleteIconImage: {
    width: WP('5'),
    height: WP('5'),
  },
  textStyle: {
    color: colors.p4,
    fontFamily: family.workSans_semiBold,
    fontSize: size.small,
    textDecorationLine: 'underline',
    marginTop: WP('6'),
    alignSelf: 'center',
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
    alignSelf: 'center',
  },
});

export {AddPictures};
