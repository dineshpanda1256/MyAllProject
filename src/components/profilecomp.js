import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {useNavigation} from '@react-navigation/native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Profilcomp = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.assumeview}>
      <View style={styles.holediv}>
        <Icon1 name={props.data.icon} style={styles.googleicon} size={25} />

        <Text style={{color: 'black', fontSize: 15}}>{props.data.loct}</Text>
      </View>

      <View style={styles.holediv}>
        <Icon2 name={props.data.icon2} style={styles.icon} size={25} />
        <Text style={{color: 'black', fontSize: 15}}>{props.data.mail}</Text>
      </View>
      <View style={styles.holediv}>
        <Icon3 name={props.data.icon3} style={styles.googleicon} size={25} />
        <Text style={{color: 'black', fontSize: 15}}>{props.data.date}</Text>
      </View>
      <View style={styles.holediv}>
        <Icon3 name={props.data.icon4} style={styles.googleicon} size={25} />

        <Text style={{color: 'black', fontSize: 15}}>{props.data.contact}</Text>
      </View>
      <View style={styles.holediv}>
        <Icon4 name={props.data.icon5} style={styles.googleicon} size={25} />

        <Text style={{color: 'black', fontSize: 15}}>{props.data.msg}</Text>
      </View>
    </View>
  );
};

export default Profilcomp;

const styles = StyleSheet.create({
  googleicon: {
    color: 'black',
    marginRight: 10,
  },
  icon: {
    color: 'black',
    marginRight: 10,
  },
  assumeview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  holediv: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
    height: Dimensions.get('window').height * 0.08,
  },
});
