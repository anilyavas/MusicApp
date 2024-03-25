import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Search = () => {
  return <TextInput placeholder='Ara...' style={styles.input} />;
};

export default Search;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gainsboro',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});
