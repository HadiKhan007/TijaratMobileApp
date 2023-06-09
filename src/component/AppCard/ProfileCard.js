/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {WP, appIcons, appImages, colors, family, size} from '../../utilities';
import {AppDivider} from '../AppDivider/AppDivider';

const ProfileCard = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Company Name</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>faheem Store</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Email Address</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>example123@gmail.com</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Street Address</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>shadbagh</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>City</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>Lahore</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Country</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>Pakistan</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Phone Number</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>+923104667883</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Verification</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={[styles.secondText, {color: colors.gr}]}>
              Verified
            </Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>Full Name(CNIC):</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>Hamza Basra</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <View style={styles.rowContainer}>
          <View style={{flex: 1}}>
            <Text style={styles.titleStyle}>CNIC:</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.secondText}>3520236971081</Text>
          </View>
        </View>
        <AppDivider lineStyle={styles.dividerStyle} />
        <Text style={styles.testStyle}>Front of your CNIC</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Image
              source={appIcons.backArrow}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={appImages.frontId}
            style={styles.cardStyle}
            resizeMode="cover"
          />
          <TouchableOpacity>
            <Image
              source={appIcons.forwardArrow}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.countStyle}>1/2</Text>
      </View>
    </ScrollView>
  );
};

export {ProfileCard};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: WP('4'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: colors.w1,
    padding: WP('3'),
    borderRadius: 8,
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    justifyContent: 'flex-start',
  },
  secondText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dividerStyle: {
    marginVertical: WP('2'),
    backgroundColor: colors.p6,
  },
  testStyle: {
    alignSelf: 'center',
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
  },
  iconStyle: {
    width: WP('3'),
    height: WP('3'),
    tintColor: colors.p3,
  },
  cardStyle: {
    width: '60%',
    height: WP('25'),
    marginVertical: WP('2'),
  },
  countStyle: {
    alignSelf: 'center',
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.tiny,
    marginVertical: WP('2'),
  },
});
