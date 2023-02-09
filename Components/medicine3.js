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

const Medicine3 = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainview}
      onPress={() => {
        navigation.navigate('Screen1ak');
      }}>
      <View style={styles.detailsview}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={props.data.url}
            style={{
              width: Dimensions.get('window').width * 0.87,
              borderRadius: 10,
              height: Dimensions.get('window').height * 0.2,
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        onPress={() => navigation.navigate('MedicinestoredetailsOrderByShop')}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#009987',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {props.data.bookingtype}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default Medicine3;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 12,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 10,
    paddingHorizontal: 5,

    elevation: 5,
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  detailsview: {
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingVertical:10,
    marginTop: 5,
    marginBottom: 7,

    borderColor: '#DFDDDD',
  },
});
