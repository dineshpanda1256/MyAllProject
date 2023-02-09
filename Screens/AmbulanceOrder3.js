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
import bgImg from '../Assets/Image/maps.png';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Foundation from 'react-native-vector-icons/dist/Foundation';

export default function AmbulanceOrder3({navigation}) {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TouchableOpacity style={styles.horizontalLinesIconDiv}>
        <Foundation name="graph-horizontal" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView>
        <View style={{height: Dimensions.get('window').height * 0.45}}></View>
        <View style={styles.whiteMainDiv}>
          <View style={styles.whiteDiv}>
            {/*  rectangle icon */}
            <View style={styles.rectangleImgDiv}>
              <Image source={require('../Assets/Image/Rectangle246.png')} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AmbulanceOrder4')}>
              {/* <Text>NEXT</Text> */}
            </TouchableOpacity>
            {/* addresses main div */}
            <View style={styles.addressesMainDiv}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#e1e1e1',
                  marginBottom: 10,
                }}>
                <Text style={styles.pickupTxt}>Pickup Address</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image source={require('../Assets/Image/Round1.png')} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Patia, Bhubaneswar"
                      style={styles.patiaTxt}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#e1e1e1',
                  marginBottom: 5,
                }}>
                <Text style={styles.destinationTxt}>Destination Address</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image source={require('../Assets/Image/Round2.png')} />
                  </View>
                  <View>
                    <TextInput
                      placeholder="Kanan Vihar, Bhubaneswar"
                      style={styles.patiaTxt}
                    />
                  </View>
                </View>
              </View>
            </View>

            {/*  vehicle no. price and otp div  */}

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.arrivalTimePriceDiv}>
                <View style={styles.nameImgDiv}>
                  <View>
                    <Image source={require('../Assets/Image/Ellipse.png')} />
                  </View>
                  <View>
                    <Text style={styles.mrMohantyTxt}>Mr. Mohanty</Text>
                  </View>
                </View>
                <View style={styles.vehiclenoPriceOtpDiv}>
                  <View style={{width: Dimensions.get('window').width * 0.25}}>
                    <Text style={styles.vehiclenoPriceOtpTxt}>Vehicle No.</Text>
                    <Text style={styles.vehiclenoPriceOtpTxt}>OD 33 1234</Text>
                  </View>
                  <View
                    style={{
                      width: Dimensions.get('window').width * 0.35,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.vehiclenoPriceOtpTxt}>Price</Text>
                    <Text style={styles.vehiclenoPriceOtpTxt}>₹250</Text>
                  </View>
                  <View
                    style={{
                      width: Dimensions.get('window').width * 0.25,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.vehiclenoPriceOtpTxt}>OTP</Text>
                    <Text style={styles.vehiclenoPriceOtpTxt}>1234</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.paymentMethodDiv}
                  onPress={() => navigation.navigate('AmbulanceOrder4')}>
                  <View>
                    <Text style={styles.vehiclenoPriceOtpTxt}>
                      Payment Method
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.vehiclenoPriceOtpTxt}>Cash</Text>
                  </View>
                </TouchableOpacity>
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
    height: Dimensions.get('window').height * 0.7,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  rectangleImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addressesMainDiv: {
    marginBottom: 15,
    justifyContent: 'flex-start',
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
    // marginBottom: 10,
    marginLeft: 10,
    width: Dimensions.get('screen').width * 0.75,
  },
  destinationTxt: {
    color: '#555B6A',
    fontSize: 12,
    fontWeight: '600',
    // marginBottom: 15,
    marginTop: 10,
  },
  vehiclenoPriceOtpDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingTop: 10,
  },
  arrivalTimePriceDiv: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.23,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  vehiclenoPriceOtpTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  nameImgDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  mrMohantyTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
  },
  paymentMethodDiv: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
