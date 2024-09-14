import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIndex from './Home/HomeComponents/HomeIndex';
import Searchs from './Home/Searchs';
import Reels from './Home/Reels';
import Shops from './Home/Shops';
import Profiles from './Profiles/Profiles';
import {
  Home,
  HomeField,
  Profile,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from './Icons';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export default function AnaEkran() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name="home"
        component={HomeIndex}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        name="search"
        component={Searchs}
      />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  style={[
                    styles.avatar,
                    {borderColor: focused ? 'blue' : 'transparent'},
                  ]}
                  source={require('../../assets/profiles.jpg')}
                />
              ),
            }}
            name="profiles"
            component={Profiles}
          />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={25} /> : <Reel size={30} />,
        }}
        name="reels"
        component={Reels}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name="shops"
        component={Shops}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 50,
  },
});
