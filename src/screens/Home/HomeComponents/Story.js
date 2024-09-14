import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Story({story}) {
  return (
    <View key={story.id} style={styles.story}>
      <LinearGradient style={styles.cover} colors={['green', 'yellow', 'red']}>

        <Image source={{uri: story.user.avatar}} style={styles.avatar} />

      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}> {story.user.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  story: {
    width: 70,
    marginHorizontal: 10,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius:23,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 33,
  },
  username: {
    fontSize: 12,
  },
});
