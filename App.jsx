import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AnaEkran from './src/screens/AnaEkran';
import {SafeAreaView} from 'react-native';
import Stories from './src/screens/Home/HomeComponents/Stories';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <AnaEkran />
      </NavigationContainer>
    </SafeAreaView>
  );
}
