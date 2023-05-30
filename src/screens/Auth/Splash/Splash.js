import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import {appIcons} from '../../../utilities';
import {AppButton} from '../../../component';

const Splash = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Image
        source={appIcons.tijaratIcon}
        style={styles.iconStyle}
        resizeMode="center"
      />
      <Text style={styles.textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doeisumod
        tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim
        veniam,
      </Text>
      <AppButton title="Get Started" containerStyle={styles.btnStyle} />
    </SafeAreaView>
  );
};

export default Splash;
