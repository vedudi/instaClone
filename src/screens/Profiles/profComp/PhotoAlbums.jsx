import {
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Posts from '../../../datas/Posts';

export default function PhotoAlbums() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  console.log(imageSize);
  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.5}>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      data={Posts}
      renderItem={renderProps}
      contentContainerStyle={styles.photoGrid}
      style={{marginTop: 15}}
    />
  );
}
const styles = StyleSheet.create({
  photoGrid: {
    paddingHorizontal: 5,
  },
});
