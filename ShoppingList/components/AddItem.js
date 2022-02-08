import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.safeView}>
      <TextInput
        style={styles.input}
        onChangeText={newText => setInput(newText)}
        placeholder="Add item..."
      />
      <TouchableOpacity>
        <Icon name="plus-square" size={20} onPress={() => addItem(input)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 8,
  },
  safeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddItem;
