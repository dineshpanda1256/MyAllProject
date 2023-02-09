import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';

export default function BuyNowBtn() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Medicine2ByCategory')}>
        <LinearGradient
          colors={['#00E0C5', '#009987']}
          style={styles.buyNowBtnDiv}>
          <Text style={styles.buyNowBtn}>Buy Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buyNowBtnDiv: {
    width: 144,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 15,
    // paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    marginTop: 10,
  },
  buyNowBtn: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ffffff',
  },
});
