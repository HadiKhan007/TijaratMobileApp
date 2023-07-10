import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const ArchiveCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Product Name:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>New Bat for cricket</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Price:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Rs. 6,000</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Status:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Deleted by seller</Text>
        </View>
      </View>
    </View>
  );
};

export {ArchiveCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.6},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    padding: WP('3'),
    marginVertical: WP('3'),
  },
  column: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
  },
  subStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.xsmall,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
  },
});
