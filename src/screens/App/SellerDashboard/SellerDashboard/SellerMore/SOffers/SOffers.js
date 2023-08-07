import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {
  AppTitle,
  SellerOfferCard,
  TopHeader,
} from '../../../../../../component';
import styles from './styles';
import {WP, appIcons} from '../../../../../../utilities';

const SOffers = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader title="Offers" iconName={appIcons.backArrow} />
        <AppTitle Title="All Offers" mainContainer={styles.titleContainer} />
        <FlatList
          data={[{}, {}, {}]}
          style={{marginBottom: WP('23')}}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <SellerOfferCard
              onPress={() => navigation.navigate('SOfferDetails')}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SOffers;
