import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Headingorder1 = props => {
  const navigation = useNavigation();

  const [checked, setChecked] = React.useState('second');

  return (
    <View style={styles.mainview}>
      <View style={styles.twonodiv}>
        <TouchableOpacity
          onPress={() =>
            setChecked('first') || navigation.navigate('Orderhistory')
          }>
          <View
            style={
              checked == 'first'
                ? {
                    backgroundColor: '#009987',
                    borderRadius: 5,
                    paddingHorizontal: 3,
                    paddingVertical: 8,
                  }
                : {paddingHorizontal: 3, paddingVertical: 8}
            }>
            <Text
              style={
                checked == 'first'
                  ? {paddingHorizontal: 14, color: 'white'}
                  : {paddingHorizontal: 14, color: 'black'}
              }>
              {props.data.booking}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            setChecked('second') || navigation.navigate('Orderheading')
          }>
          <View
            style={
              checked == 'second'
                ? {
                    backgroundColor: '#009987',
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    paddingVertical: 8,
                    marginRight: 17,
                  }
                : {paddingHorizontal: 5, paddingVertical: 8, marginRight: 17}
            }>
            <Text
              style={
                checked == 'second'
                  ? {paddingHorizontal: 14, color: 'white'}
                  : {paddingHorizontal: 14, color: 'black'}
              }>
              {props.data.order}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setChecked('third')}>
          <View
            style={
              checked == 'third'
                ? {
                    backgroundColor: '#009987',
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderRadius: 5,
                  }
                : {paddingHorizontal: 10, paddingVertical: 8}
            }>
            <Text
              style={
                checked == 'third'
                  ? {paddingHorizontal: 14, color: 'white'}
                  : {paddingHorizontal: 14, color: 'black'}
              }>
              {props.data.test}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headingorder1;

const styles = StyleSheet.create({
  mainview: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 30,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    justifyContent: 'space-evenly',
  },

  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 10,
  },

  headingdiv: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  textheading: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 70,
  },

  twonodiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9CCD3',
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookings: {
    backgroundColor: '#009987',
    borderRadius: 5,
  },
  bookingstext: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    color: 'black',
  },
  orders: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  tests: {
    justifyContent: 'center',
    paddingRight: 10,
  },
  orderstext: {},
});
