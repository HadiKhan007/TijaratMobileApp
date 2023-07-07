import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {ProfileCard, TopHeader} from '../../../../../../component';
import {appIcons, colors} from '../../../../../../utilities';
import ToggleSwitch from 'toggle-switch-react-native';

const SellerProfile = ({navigation}) => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader
          iconName={appIcons.backArrow}
          title="Profile"
          rightText="Edit"
          // onPressRight={() => navigation.navigate('SUpdateprofile')}
          onPressRight={() => navigation.navigate('EasyPaisa')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Profile</Text>

          <ToggleSwitch
            isOn={switchOn}
            onColor={colors.p3}
            offColor={colors.p2}
            label={switchOn ? 'Availble' : 'Not Availble'}
            labelStyle={{color: colors.p1}}
            size="small"
            onToggle={() => setSwitchOn(!switchOn)}
            circleColor={colors.p1}
          />
        </View>
        <ProfileCard />
      </View>
    </SafeAreaView>
  );
};

export default SellerProfile;
