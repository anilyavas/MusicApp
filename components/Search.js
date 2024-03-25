import { StyleSheet, TextInput, View } from 'react-native';

const Search = ({ onSearch }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Ara...'
        style={styles.input}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  input: {},
});
