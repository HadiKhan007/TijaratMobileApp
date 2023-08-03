import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WP, colors, family, size} from '../../utilities';

const ArchiveCard = ({item, data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Product Name:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data[item]?.data[item]?.name
              ? data[item]?.data[item]?.name
              : 'Empty'}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Price:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data[item]?.data[item]?.price
              ? data[item]?.data[item]?.price
              : 'Empty'}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.column}>
          <Text style={styles.titleStyle}>Status:</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subStyle}>
            {data[item]?.data[item]?.isDeleted ? 'hello' : 'yellow'}
          </Text>
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
    marginVertical: WP('1'),
  },
});
