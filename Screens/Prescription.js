import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Precomp from '../Components/precomp';
import Backicon from '../Components/backordercomp';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Prescription = ({navigation}) => { 
  var opi = [
    {
      name: 'Consultant',
    },
  ];

  var zpi = [
    {
      booking: 'Bookings',
      order: 'Orders',
      test: 'Test',
    },
  ];

  return (
    <ScrollView style={styles.contrainer}>
      <TouchableOpacity>
        {/* <Text onPress={() => navigation.navigate('Ordertwo')}> <Icon name='leftcircleo'  style={styles.backicon} size={30} /></Text> */}
        <TouchableOpacity style={styles.startedbtn}>
          <Icon1
            name="left"
            style={styles.backicon}
            onPress={() => {
              navigation.goBack();
            }}
            size={20}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      {opi.map(dinesh4 => {
        return <Precomp data={dinesh4} />;
      })}

      {/* <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Orderheading')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Prescription;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 16,
    padding: 10,
    width: 43,
  },
  startedbtn: {
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 5,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 40,
  },
});
