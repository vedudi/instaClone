import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Stories from './Stories';
import Post from '../../../components/Shared/Post';
import posts from '../../../datas/Posts';

export default function HomeIndex() {
  return (
    <View>
      <Header />
      <Stories />
      <ScrollView>
        {posts?.map(post => (
          <Post post={post} key={post.id} />
        ))}
      <Post />
      </ScrollView>
    </View>
  );
}
