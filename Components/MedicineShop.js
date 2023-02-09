import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const MedicineShop = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.mdcshopview1}
        onPress={() => navigation.navigate('Clinics')}>
        <View style={styles.mdcshopview2}>
          <Image style={styles.mdcshopimg} source={props.img}></Image>
        </View>
        <View>
          <Text style={styles.text1}>{props.shopname}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mdcshopview1: {
    marginBottom: 15,
    marginHorizontal: 2,
    borderRadius: 15,
    width: 260,
    marginLeft: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderColor: '#E7E7E',
  },
  mdcshopview2: {
    margin: 10,
    width: 240,
    height: 98,
  },
  mdcshopimg: {
    width: 240,
    height: 98,
    borderRadius: 10,
  },
  text1: {
    color: '#009987',
    fontWeight: 'bold',
  },
});

export default MedicineShop;
