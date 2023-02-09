import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';
  import React from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
  import {useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import image from '../Assets/Image/Doctorvideo.png';
  
  const {height, width} = Dimensions.get('screen');
  
  export default function Doctorvideo() {
    const navigation = useNavigation();
  
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.uperspace}></View>
  
        <View style={styles.buttondiv}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={styles.buttonview}>
            <Image
              style={styles.videoicon}
              source={require('../Assets/Image/vicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Boarding');
            }}
            style={styles.button2view}>
            <Image
              style={styles.micicon}
              source={require('../Assets/Image/mic.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.button3view}>
            <Image
              style={styles.cancelicon}
              source={require('../Assets/Image/cancelicon.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    buttondiv: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    buttonview: {
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#898787',
    },
    videoicon: {
      width: 33,
      height: 25,
    },
    micicon: {
      width: 19,
      height: 30,
    },
    cancelicon: {
      width: 37,
      height: 20,
    },
    button2view: {
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#898787',
    },
    button3view: {
      borderRadius: 70,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      backgroundColor: 'red',
    },
    uperspace: {
      height: Dimensions.get('screen').height * 0.62,
    },
  });