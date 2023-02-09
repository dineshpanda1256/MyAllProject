import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconi from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Precomp = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainview}>
      <View style={styles.consultantdiv}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {props.data.name}
          </Text>
        </View>
        <View>
          <Text>Doctor : Dr. Sagarika</Text>
        </View>
        <View>
          <Text>Sag Clinc,</Text>
          <Text>Video Conference call Done.</Text>
        </View>
        <View>
          <Text>Call hour: 5min 30sec</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Medicine_home')}>
          <View style={styles.downloadprescriptiondiv}>
            <Text style={styles.downloadprescriptiontext}>
              Download Prescription
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.paymentsummarydiv}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Payment Summary
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Total MRP</Text>
          </View>
          <View>
            <Text>₹ 1240.00 </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Total Discount</Text>
          <Text>₹ 240.00 </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>GST</Text>
          <Text>₹ 240.00 </Text>
        </View>
      </View>

      <View style={styles.gstdiv}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Grand Total</Text>
          <Text>₹ 1040.00 </Text>
        </View>
      </View>

      <View style={styles.paymentmethoddiv}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Payment Method
          </Text>
          <Text>Online </Text>
        </View>
      </View>
    </View>
  );
};
export default Precomp;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 20,
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
    paddingHorizontal: 15,
    elevation: 5,
  },
  consultantdiv: {
    justifyContent: 'space-evenly',
    height: Dimensions.get('window').height * 0.3,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
  },
  paymentsummarydiv: {
    justifyContent: 'space-evenly',
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
  },
  gstdiv: {
    justifyContent: 'space-evenly',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
  },
  paymentmethoddiv: {
    justifyContent: 'space-evenly',
    height: 50,

    borderColor: '#DFDDDD',
  },
  // appointmentdiv:{
  //     justifyContent:'space-evenly',
  //     height:80,

  // },
  yesbutton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 10,
    borderColor: '#009987',
    color: '#009987',
  },
  nobutton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 10,
    borderColor: '#EB4335',
    color: '#EB4335',
  },
  downloadprescriptiontext: {
    color: '#009987',
    borderWidth: 1,
    paddingHorizontal: 30,
    fontFamily: 'Mulish',
    paddingVertical: 7,
    borderRadius: 5,
    borderColor: '#00E0C5',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadprescriptiondiv: {
    paddingRight: 80,
    alignItems: 'center',
  },
});
