import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Medicine = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainview}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Orderhistory')}>
      <Text
        style={styles.heading}
        >
        {props.data.centername}
      </Text>
      </TouchableOpacity>
      

      <View style={styles.detailsview}>
        <View style={{justifyContent: 'flex-start'}}>
          {/* <Image source={props.data.url} style={{ width: 60, height: 60 }} /> */}
          <Text style={{fontSize: 12, color: '#6B779A', marginHorizontal: 5}}>
            {props.data.name}
          </Text>
          <Text style={{fontSize: 12, color: '#6B779A', marginHorizontal: 3}}>
            {props.data.name1}
          </Text>
        </View>

        <View style={{justifyContent: 'flex-start'}}>
          {/* <Iconi name='time-outline' size={16} /> */}
        </View>

        <View>
          {/* <Icon name='calendar' size={16} /> */}
          {/* <Text style={{fontSize:12,fontWeight:'bold',color: '#717171',marginHorizontal:5,}}>02.02.2000</Text> */}
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Mrn_number1');
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#009987', fontFamily: 'Mulish', marginRight: 5}}>
          {props.data.bookingtype}
        </Text>
        <View>
          <Icon1 name="play" size={15} color="#009987" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Medicine;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: '#00E0C5',
    backgroundColor: '#ffffff',
    // shadowColor: "#000",

    // shadowOffset: {
    // 	width: 0,
    // 	height: 2,

    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    paddingVertical: 20,
    paddingHorizontal: 45,

    // elevation: 5,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  detailsview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 10,

    borderColor: '#DFDDDD',
  },
});
