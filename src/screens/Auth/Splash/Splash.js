import React, {useEffect} from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import styles from './styles';
import {appIcons} from '../../../utilities';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTabs');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Image
          source={appIcons.tijaratIcon}
          style={styles.iconStyle}
          resizeMode="center"
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
