import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header.js';

const App = () => {
  return (
    <View style={styles.constainer}>
      <Header title="Shopping list" />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
