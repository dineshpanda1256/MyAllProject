import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
//import logo from '../Assets/Image/g.png';
const SpalshScreen = () => {
  return (
    <View style={styles.Container}>
      <StatusBar hidden={true} />
      <Image source={require('../Assets/Image/f.png')} style={styles.logo} />
    </View>
  );
};

export default SpalshScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 120,
    borderRadius: 20,
  },
  logo1: {
    width: 25,
    height: 25,
    position: 'relative',
    bottom: 65,
    marginLeft: 20,
  },
});
