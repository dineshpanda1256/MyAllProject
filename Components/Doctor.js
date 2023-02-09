import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const Docters = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subcontainer}
        onPress={() => navigation.navigate('profile')}>
        <LinearGradient colors={['#00E0C5', '#009987']} style={styles.docimg}>
          <Image source={props.img} style={styles.img}></Image>
        </LinearGradient>
        <Text style={styles.aboutdoc1}>{props.name}</Text>
        <Text style={styles.aboutdoc2}>{props.post}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 3,
  },
  subcontainer: {
    backgroundColor: 'white',
    height: 210,
    width: 140,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 10,
    marginLeft: 20,
  },
  docimg: {
    borderRadius: 20,
    height: 124,
    width: 115,
    marginVertical: 10,
  },
  img: {
    height: 130,
    width: 115,
  },
  aboutdoc1: {
    color: 'black',
  },
  aboutdoc2: {
    color: '#009987',
  },
});
export default Docters;
