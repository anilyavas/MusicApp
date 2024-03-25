import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import data from './assets/data/data.json';
import MusicItem from './components/MusicItem';
import Search from './components/Search';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <FlatList
        data={data}
        renderItem={({ item }) => <MusicItem item={item} />}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
