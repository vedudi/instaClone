import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

export default function FitImage({src}) {
const width=Dimensions.get('window').width
const ratio=1080/width
const height=607/ratio

  return (
    <View>
      <Image
        source={{
          uri: src,
        }}
        style={{
          width,
          height,
          marginTop:15,
        }}
      />
    </View>
  );
}
