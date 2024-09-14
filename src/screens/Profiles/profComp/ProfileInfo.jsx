import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.profileinfo}>
      <LinearGradient style={styles.cover} colors={['green', 'yellow', 'red']}>
        <View style={styles.border}>
          <Image
            source={require('./../../../../assets/profiles.jpg')}
            style={styles.avatar}
          />
        </View>
      </LinearGradient>
      <View style={styles.states}>
        <Text style={styles.statesNumber}>0.000</Text>
        <Text style={styles.statesLabel}>Post</Text>
      </View>
      <View style={styles.states}>
        <Text style={styles.statesNumber}>0.000</Text>
        <Text style={styles.statesLabel}>Followers</Text>
      </View>
      <View style={styles.states}>
        <Text style={styles.statesNumber}>0.000</Text>
        <Text style={styles.statesLabel}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cover: {
    width: 85,
    height: 85,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  border:{
    width: 80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'white',
    backgroundColor:'white',
    borderRadius: 40,
  },
  profileinfo:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  states:{
    alignItems:'center'
  },
  statesNumber:{
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
  },
  statesLabel:{
    fontSize:12,
    fontWeight:'400',
    color:'#000000'
  },
});
