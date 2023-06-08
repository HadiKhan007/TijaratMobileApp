import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP} from '../../../../../utilities';

const Fashion = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Fashion</Text>
    </View>
  );
};

export default Fashion;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: WP('6'),
    backgroundColor: 'red',
  },
});
