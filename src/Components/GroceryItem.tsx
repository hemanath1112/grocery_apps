import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GroceryDetails from './GroceryDetails';

const GroceryItem = () => {
  const Data = [
    {
      id: 1,
      name: 'hema',
    },
    {
      id: 2,
      name: 'hema',
    },
    {
      id: 3,
      name: 'hema',
    },
    {
      id: 4,
      name: 'hema',
    },
    {
      id: 5,
      name: 'hema',
    },
  ];

  const renderItem = ({item}: any) => {
    return <GroceryDetails item={item} />;
  };

  return (
    <View style={styles.groceryItem}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  );
};

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
