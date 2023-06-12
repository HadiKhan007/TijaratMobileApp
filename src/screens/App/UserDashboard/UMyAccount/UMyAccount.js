import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import {
  AccountCard,
  AppButton,
  AppTitle,
  TopHeader,
} from '../../../../component';
import {appIcons, appImages, colors} from '../../../../utilities';
import {TextInput} from 'react-native-paper';

const UMyAccount = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.mainContainer}
          source={appImages.curveImg}
          resizeMode="cover">
          <TopHeader
            iconName={appIcons.backArrow}
            title="User Dashboard"
            titleStyle={{color: colors.w1}}
            iconContainer={{colors: colors.p2}}
          />
          <AccountCard
            iconName={appIcons.person}
            title="Hamza Habib"
            email="Madison, United State..."
            titleStyle={{color: colors.w1}}
            mailStyle={{color: colors.w1}}
            iconStyle={styles.iconStyle}
            mainContainer={{marginTop: 40}}
          />
        </ImageBackground>
      </View>
      <View style={styles.secondContainer}>
        <AppTitle Title="My Account" mainContainer={styles.titleContainer} />
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          autoFocus
          outlineColor="red"
          outlineStyle={{borderColor: 'red'}}
        />
        <View style={styles.rowContainer}>
          <AppButton
            containerStyle={styles.btnStyle}
            title="Update"
            onPress={() => navigation.navigate('UMyAccount')}
          />
          <AppButton
            containerStyle={styles.btn2Style}
            title="Back"
            titleStyle={styles.btn2Title}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UMyAccount;
