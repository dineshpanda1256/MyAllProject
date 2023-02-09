import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Clinics = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Clinicview}
        onPress={() => navigation.navigate('Patholabs')}>
        <Image style={styles.Clinicsimg} source={props.img}></Image>
        <View style={styles.SubClinicview}>
          <Text style={styles.text1}>{props.clinicname}</Text>
          <Text style={styles.text2}>{props.clinicplace}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  Clinicview: {
    marginHorizontal: 2,
    width: 175,
    marginLeft: 20,
  },
  Clinicsimg: {
    height: 110,
    width: 175,
    borderBottomStartRadius: 15,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10
  },
  SubClinicview: {
    position: 'relative',
    top: -10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#ededed',
    borderWidth: 1,
  },
  text1: {
    color: '#009987',
    fontWeight: 'bold',
    fontFamily: 'Mulish'
  },
  text2: {
    color: '#979797',
    fontSize: 12,
    fontFamily: 'Mulish'
  },
});

export default Clinics;
