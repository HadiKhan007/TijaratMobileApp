import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import AppHeader from '../../../../component/AppHeader/AppHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <AppHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
