import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Button1 = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainview}>
      <View style={styles.detailsview}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>{props.data.button}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Button1;

const styles = StyleSheet.create({
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.8,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    // margin: 10,
    color: 'white',
    marginVertical: 10,
    backgroundColor: 'transparent',

    paddingVertical: 2,
  },
});
