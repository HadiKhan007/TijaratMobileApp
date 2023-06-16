import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {AppTitle, NotificationCard, TopHeader} from '../../../component';
import {appIcons} from '../../../utilities';

const Notification = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="Notifications" />
        <AppTitle secondTitle="Mark all Read" />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
