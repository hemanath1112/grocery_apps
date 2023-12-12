import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GroceryDetails from './GroceryDetails';
import {Item} from './Data';

const GroceryItem = () => {
  const renderItem = ({item}: any) => {
    return <GroceryDetails item={item} />;
  };

  return (
    <View style={styles.groceryItem}>
      <FlatList
        data={Item}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
