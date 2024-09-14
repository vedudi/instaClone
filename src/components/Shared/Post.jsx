import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bookmark, Comment, Heart, More, Share} from '../../screens/Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';

export default function Post({post}) {
  console.log(post);

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post?.user?.avatar}} style={styles.avatar} />
          <Text style={styles.titles}> {post?.user?.name} </Text>
        </View>
        <More />
      </View>
      <FitImage src={post?.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity activeOpacity={0.5}>
              <Heart size={25} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Share />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Comment />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post?.likes} likes</Text>
        </View>
        <ReadMore
          seeLessStyle={{color: '#999'}}
          seeLessText="Daha az"
          seeMoreText="Daha fazla"
          seeMoreStyle={{color: '#999'}}
          numberOfLines={2}>
          <Text style={styles.user}> {post?.user.name} </Text>
          {post?.description}
        </ReadMore>
        {post?.comments > 0 && (
          <TouchableOpacity style={{paddingBottom: 5}} activeOpacity={0.5}>
            <Text style={styles.comments}>View all {post?.comments}</Text>
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.date}> {post?.date} </Text>
          <Text style={styles.translation}> See Translation</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
  },
  titles: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftActions: {
    flexDirection: 'row',
    gap: 15,
  },
  user: {
    fontWeight: 'bold',
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },
  comments: {
    opacity: 0.5,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
