import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import LinearGradient from 'react-native-linear-gradient';
import bgImg from '../Assets/Image/maps.png';
import AlarmIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function POrderTrackingScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TouchableOpacity style={styles.horizontalLinesIconDiv}>
        <Foundation name="graph-horizontal" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={{height: Dimensions.get('window').height * 0.6}}></View>
        <View style={styles.whiteMainDiv}>
          <View style={styles.whiteDiv}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../Assets/Image/Rectangle246.png')} />
            </View>
            <View style={styles.alarmIconDiv}>
              <AlarmIcon name="alarm-outline" size={15} color="#000" />
              <Text style={styles.timeTxt}>Time</Text>
            </View>
            <View>
              <Text style={styles.pickupTxt}>Pickup Address</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../Assets/Image/Round1.png')}
                    style={{marginBottom: 10}}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Pick up Address"
                    style={styles.patiaTxt}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.destinationTxt}>Destination Address</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    source={require('../Assets/Image/Round2.png')}
                    style={{marginBottom: 10}}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Enter Destination Address"
                    style={styles.patiaTxt}
                  />
                </View>
              </View>
            </View>

            <View
              style={{height: Dimensions.get('window').height * 0.05}}></View>
            <View style={{justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <LinearGradient
                    colors={['#00E0C5', '#009987']}
                    style={styles.confirmBtnDiv}>
                    <TouchableOpacity
                      style={styles.confirmBtn}
                      onPress={() => navigation.navigate('AmbulanceOrder1')}>
                      <Text style={styles.confirmBtnTxt}>Book Ambulance</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalLinesIconDiv: {
    width: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    left: 20,
  },
  whiteMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteDiv: {
    // height: Dimensions.get('window').height * 0.42,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  alarmIconDiv: {
    width: 50,
    height: 50,
    borderColor: '#9C9C9C',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 250,
  },
  timeTxt: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Mulish',
  },
  pickupTxt: {
    color: '#555B6A',
    fontSize: 12,
    fontWeight: '600',
    // marginBottom: 15,
    marginTop: 20,
  },
  patiaTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 15,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    width: Dimensions.get('screen').width * 0.75,
  },
  destinationTxt: {
    color: '#555B6A',
    fontSize: 12,
    fontWeight: '600',
    // marginBottom: 15,
  },
  arrivalTimePriceDiv: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    width: Dimensions.get('window').width * 0.85,
    // height: Dimensions.get('window').height * 0.16,
    padding: 15,
    marginBottom: 10,
  },
  arrivalTimeTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  paymentMethodTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 10,
  },
  onlineTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
  },
  // button
  confirmBtnDiv: {
    width: Dimensions.get('window').width * 0.85,
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  confirmBtn: {
    height: Dimensions.get('window').height * 0.062,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
