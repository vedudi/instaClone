import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ProfileInfo from './profComp/ProfileInfo';
import ProfileHeader from './profComp/ProfileHeader';
import ProfileBio from './profComp/ProfileBio';
import ProfileStory from './profComp/ProfileStory';
import PhotoAlbums from './profComp/PhotoAlbums';

export default function Profiles({post}) {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStory />
      <ScrollView>
        <PhotoAlbums />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
