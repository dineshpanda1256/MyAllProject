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
import Billcomp from '../Components/billcomp';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Bill = ({navigation}) => {
  // var tpi= [
  //     {
  //         url: require('../Assets/img/Cricket_icon.png'),
  //         centername: 'Consultant',
  //         name: 'Video Conference',
  //         time: '06.30',
  //         date: '22.02.2022',
  //         bookingtype: 'Upcoming',
  //         price: '₹240',
  //         button:'Get Started',
  //     },

  // ]
  var xpi = [
    {
      medicine: 'Montec LC ',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.startedbtn}>
        <Icon1
          name="left"
          style={styles.backicon}
          onPress={() => navigation.navigate('Mapp2')}
          size={20}
        />
        <Text style={styles.Ordertext}>Orders</Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <View style={styles.orderiddiv}>
          <Text style={{color: 'black', fontWeight: '500'}}>
            Order Id: Ckare123456
          </Text>
        </View>
      </View>

      {xpi.map(dinesh2 => {
        return <Billcomp data={dinesh2} />;
      })}
      <View style={styles.mainview}>
        <View style={styles.detailsview}>
          <TouchableOpacity onPress={() => navigation.navigate('Bill2')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Thank You</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  startedbtn: {
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 20,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 16,
    padding: 10,
    width: 43,
  },
  Ordertext: {
    color: 'black',
    fontSize: 20,
  },
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
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
  orderiddiv: {
    width: Dimensions.get('window').width * 0.85,
  },
});

export default Bill;
