import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import uuid from 'uuidv4';
import AddItem from './components/AddItem.js';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Beef'},
    {id: uuid(), text: 'Cola'},
    {id: uuid(), text: 'voda'},
    {id: uuid(), text: 'hlqb'},
    {id: uuid(), text: 'maslo'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const addItem = text => {
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };
  return (
    <View style={styles.constainer}>
      <Header title="Shopping list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item.text} itemId={item.id} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 60,
  },
  proto: {
    flex: 1,
  },
});

export default App;
