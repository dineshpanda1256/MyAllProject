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
import Button1 from '../Components/button';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Let = ({navigation}) => {
  var tpi = [
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      // centername: 'Consultant',
      // name: 'Video Conference',
      // time: '06.30',
      // date: '22.02.2022',
      // bookingtype: 'Upcoming',
      // price: '₹240',
      button: 'Get Started',
    },
  ];
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Let;
