import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import StoryPict from '../../../datas/StoryPict';
import Story from './Story';

export default function Stories() {
  return (
    <View style={styles.stories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {StoryPict.map(story => (
         <Story story={story}/>
      ))}
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    stories:{
        paddingVertical:10,

    }
})
