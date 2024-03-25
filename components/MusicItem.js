import { View, Text, StyleSheet, Image } from 'react-native';

const MusicItem = ({ item }) => {
  return (
    <View style={styles.musicContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
          <Text style={styles.artist}>{item.artist}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
      {item.isSoldOut && <Text style={styles.soldout}>TÜKENDİ</Text>}
    </View>
  );
};

export default MusicItem;
const styles = StyleSheet.create({
  musicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  nameContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  },
  artist: {
    fontSize: 14,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 40,
    marginRight: 5,
  },
  soldout: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 3,
    color: 'red',
  },
  year: {
    color: 'grey',
    fontSize: 14,
  },
});
