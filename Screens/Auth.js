import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

// const Login = (props) =>
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.startedbtn}
        onPress={() => navigation.navigate('Home')}>
        {' '}
        Back
      </Text>

      <View style={styles.fdiv}>
        <Text style={styles.heading}>Welcome to Ckare!</Text>
        <Text style={styles.inserttext}>Insert your phone number to start</Text>
        <Image
          style={styles.img2}
          source={require('../Assets/Image/mapimg.png')}
        />

        <TextInput style={styles.numberinput}>+91</TextInput>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.continuebtn}
          onPress={() => navigation.navigate('Signup')}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startedbtn: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  fdiv: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
  numberinput: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 280,
    marginLeft: 50,
    marginTop: -34,
    marginBottom: 30,
  },
  img2: {
    position: 'relative',
    left: -15,
    top: 25,
  },
  continuebtn: {
    paddingLeft: 130,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    marginTop: 40,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: '#009987',
  },
});
export default Login;
