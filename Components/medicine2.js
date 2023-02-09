import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Medicine2 = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainview}
      onPress={() => {
        navigation.navigate('MedicineList');
      }}>
      <View style={styles.detailsview}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={props.data.url} style={{width: 60, height: 50}} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#717171',
              marginHorizontal: 5,
            }}>
            {props.data.name}
          </Text>
        </View>
      </View>

      <View style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Text style={{fontSize: 10, color: '#222222', paddingHorizontal: 5}}>
          {props.data.bookingtype}
        </Text>
        <Text style={{fontSize: 10, color: '#222222', paddingHorizontal: 5}}>
          {props.data.bookingtype2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Medicine2;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width * 0.225,
    // shadowColor: "#000",

    // shadowOffset: {
    // 	width: 0,
    // 	height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // elevation: 5,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  detailsview: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 10,
    // borderBottomWidth:1,
    borderColor: '#DFDDDD',
  },
});
