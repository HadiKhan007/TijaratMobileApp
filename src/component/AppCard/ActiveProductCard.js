import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const ActiveProductCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Order Id:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>10082-1</Text>
        </View>
      </View>
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
          <Text style={styles.titleStyle}>Quantity:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>1</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Price:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>198008</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Payment:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>COD</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Phone::</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>N/A</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Phone:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>N/A</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Date:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>Jun28,2022, 12:43:48 pm</Text>
        </View>
      </View>
    </View>
  );
};

export {ActiveProductCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.w1,
    borderRadius: 8,
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
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('1'),
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  subStyle: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
});
