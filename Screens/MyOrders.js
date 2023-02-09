import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ordercomp1 from '../Components/ordercomp1';
import Headingorder from '../Components/heading';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Backicon from '../Components/backordercomp';

const Orderhistory = ({navigation}) => {
  var zpi = [
    {
      booking: 'Bookings',
      order: 'Orders',
      test: 'Test',
    },
  ];

  var xpi = [
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      centername: 'Consultant',
      name: 'Video Conference',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Upcoming',
      price: '₹240',
    },
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      centername: 'Consultant',
      name: 'Video Conference',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Upcoming',
      price: '₹240',
    },
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      centername: 'Consultant',
      name: 'Video Conference',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Upcoming',
      price: '₹240',
    },
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      centername: 'Consultant',
      name: 'Video Conference',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Upcoming',
      price: '₹240',
    },
    {
      // url: require('../Assets/img/Cricket_icon.png'),
      centername: 'Consultant',
      name: 'Video Conference',
      time: '06.30',
      date: '22.02.2022',
      bookingtype: 'Upcoming',
      price: '₹240',
    },
  ];
  return (
    <ScrollView style={styles.contrainer}>
      {zpi.map(dinesh1 => {
        return <Backicon data={dinesh1} />;
      })}

      {zpi.map(dinesh1 => {
        return <Headingorder data={dinesh1} />;
      })}

      <TouchableOpacity>
        {xpi.map(dinesh2 => {
          return <Ordercomp1 data={dinesh2} />;
        })}
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Orderhistory;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 50,
  },

  headingdiv: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 50,
    alignItems: 'center',
  },
  textheading: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
