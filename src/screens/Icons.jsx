import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

function Logo() {
  return <Image source={require('../../assets/logo.png')} />;
}
function Home({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/home.png')}
    />
  );
}
function HomeField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/home-field.png')}
    />
  );
}
function SearchField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/search-field.png')}
    />
  );
}
function Search({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/search.png')}
    />
  );
}
function ShopField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/shop-field.png')}
    />
  );
}
function Shop({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/shop.png')}
    />
  );
}
function ReelField({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/reel-field.png')}
    />
  );
}
function Plus({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/plus.png')}
    />
  );
}
function Heart({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/heart.png')}
    />
  );
}
function Messenger({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/messenger.png')}
    />
  );
}
function More({size}) {
  return (
    <Image
      style={{width: 20, height: 5}}
      source={require('../../assets/more.png')}
    />
  );
}
function Reel({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../../assets/reel.png')}
    />
  );
}
function Bookmark({size}) {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={require('../../assets/bookmark.png')}
    />
  );
}
function Comment({size}) {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={require('../../assets/comment.png')}
    />
  );
}
function Share({size}) {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={require('../../assets/share.png')}
    />
  );
}
function Dropdown({size}) {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={require('../../assets/dropdown.png')}
    />
  );
}
function Burger({size}) {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={require('../../assets/burger.png')}
    />
  );
}

export {
  Burger,
  Dropdown,
  Share,
  Comment,
  Bookmark,
  More,
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  ShopField,
  Shop,
  Reel,
  ReelField,
  Plus,
  Heart,
  Messenger,
};
