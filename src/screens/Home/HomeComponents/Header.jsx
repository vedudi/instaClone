import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Heart, Logo, Messenger, Plus} from '../../Icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Plus size={25} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Heart size={25} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Messenger size={25} />
        </TouchableOpacity>
      </View>
      <Logo />

    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 44,
    alignItems: 'center',
    paddingTop: 5,
  },
  actions: {
    flexDirection: 'row',
    gap: 30,
  },
  dot: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 50,
  },
  dotContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
