import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {CategoryCard, TopHeader} from '../../../../component';
import {appIcons, categoryData} from '../../../../utilities';

const AllCategories = () => {
  const renderItem = ({item}) => <CategoryCard item={item} />;
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <TopHeader iconName={appIcons.backArrow} title="All Categories" />
        <FlatList
          data={categoryData}
          keyExtractor={(item, index) => item + index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllCategories;
