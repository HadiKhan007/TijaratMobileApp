import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const LogIn = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Text>LogIn</Text>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
