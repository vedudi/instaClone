import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <View style={{flexDirection:'row'}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.stories}>
        <View style={styles.story}>
          <View
            style={{
              borderColor: 'red',
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
            }}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/2.jpg',
              }}
              style={styles.storyImage}
            />
          </View>
          <Text style={styles.storyLabel}>Story 1</Text>
        </View>
        <View style={styles.story}>
          <View
            style={{
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',
              borderWidth: 2,
            }}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/8.jpg',
              }}
              style={styles.storyImage}
            />
          </View>
          <Text style={styles.storyLabel}>Story 2</Text>
        </View>
        <View style={styles.story}>
          <View
            style={{
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',
              borderWidth: 2,
            }}>
            <Image
              source={require('./../../../../assets/profiles.jpg')}
              style={styles.storyImage}
            />
          </View>
          <Text style={styles.storyLabel}>Vedudi</Text>
        </View>

        <View style={styles.story}>
          <View
            style={{
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',
              borderWidth: 2,
            }}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/5.jpg',
              }}
              style={styles.storyImage}
            />
          </View>
          <Text style={styles.storyLabel}>Story 4</Text>
        </View>
        <View style={styles.story}>
          <View
            style={{
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 35,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'red',
              borderWidth: 2,
            }}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/7.jpg',
              }}
              style={styles.storyImage}
            />
          </View>
          <Text style={styles.storyLabel}>Story 4</Text>
        </View>
      </ScrollView>
      <View style={styles.story}>
        <View
          style={{
            borderWidth: 2,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'red',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>More</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
});
