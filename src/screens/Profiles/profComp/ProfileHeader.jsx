import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Burger, Dropdown, Plus } from '../../Icons';

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      }}>
      <Text style={styles.username}> VEDUDİ </Text>
      <Dropdown />
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <TouchableOpacity activeOpacity={0.5}>
        <Plus size={30} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Burger />
      </TouchableOpacity>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 13,
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
