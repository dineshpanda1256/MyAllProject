import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';

export default function Delivery_Bill() {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.AddedToCartDiv}>
        <View style={styles.AddedToCartLeftDiv}>
          <Image source={require('../Assets/Paracetamol2.png')} />
        </View>
        <View style={styles.AddedToCartRightDiv}>
          <Text>Paracetamol 500Mg</Text>
          <View style={styles.priceDiv}>
            <Text style={styles.priceTxt}>₹ 80.00 </Text>
            <Text style={styles.originalPriceTxt}> 100 </Text>
            <Text style={styles.offerTxt}> 10 % off</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {},
  AddedToCartDiv: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5',
  },
  priceDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
  originalPriceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  offerTxt: {
    color: '#009987',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
});
