import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GroceryDetails from './GroceryDetails';
import {Item} from './Data';

const GroceryItem = () => {
  const renderItem = ({item}: any) => {
    return <GroceryDetails item={item} />;
  };

  const SeparatorComponent = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.groceryItem}>
      <FlatList
        data={Item}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={SeparatorComponent}
        numColumns={2}
        scrollEnabled={true}
      />
    </View>
  );
};

export default GroceryItem;

const styles = StyleSheet.create({
  groceryItem: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 100,
  },
  separator: {
    height: 15,
  },
});
