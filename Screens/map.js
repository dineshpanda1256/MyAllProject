import React, { useState } from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default function AmbulanceOrder3({ navigation }) {
  return (
    <ImageBackground source={bgImg} style={styles.container}>

      <ScrollView>
        <View style={{ height: Dimensions.get('window').height * 0.5 }}></View>
        <View style={styles.whiteMainDiv}>
          <View style={styles.whiteDiv}>
            {/*  rectangle icon */}
            <View style={styles.rectangleImgDiv}>
              <Image source={require('../Assets/Image/Rectangle246.png')} />
            </View>
            <View style={styles.bottomdiv}>
              <View style={styles.firstrowdiv}>
                <View>
                  <Image
                    style={{ height: 45, width: 45 }}
                    source={require('../Assets/Image/Topimg.png')}></Image>
                </View>
                <View style={{ marginRight: 100 }}>
                  <Text style={styles.MrMohantyTxt}>Mr. Mohanty</Text>
                  <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <FontAwesome name='star' size={12} color="#FBBC05" />
                    <FontAwesome name='star' size={12} color="#FBBC05" />
                    <FontAwesome name='star' size={12} color="#FBBC05" />
                    <FontAwesome name='star' size={12} color="#FBBC05" />
                    <FontAwesome name='star' size={12} color="#FBBC05" />

                  </View>

                </View>
                <View style={styles.dialericon}>
                  <FontAwesome name='phone' size={25} color="#fff" />
                </View>
              </View>

              <View style={styles.secondrowdiv}>
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.MrMohantyTxt}>Order Id: Ckare123456</Text>
                </View>

                <View style={styles.deliverytime}>
                  <View
                    style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View style={styles.clockicon}>
                      <MaterialCommunityIcons name='alarm' size={25} color="#009987" />
                    </View>
                    <View>
                      <Text>Delivery Time</Text>
                      <Text style={styles.thirtyMinsTxt}>30 Minutes</Text>
                    </View>
                  </View>

                  <View
                    style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View style={styles.homeicon}>
                      <Feather name='home' size={25} color="#00E0C5" />
                    </View>
                    <View>
                      <Text>Delivery Address</Text>
                      <Text style={styles.thirtyMinsTxt}>13 Nandan Vihar</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.mainview}>
                <View style={styles.detailsview}>
                  <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
                    <LinearGradient
                      colors={['#00E0C5', '#009987']}
                      style={styles.linearGradient}>
                      <Text style={styles.buttonText}>Order Details</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground >
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
    height: Dimensions.get('window').height * 0.55,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  rectangleImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width * 1,
  },
  firstrowdiv: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DFDDDD',
    paddingHorizontal: 10,
    paddingVertical: 15,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  // bottomdiv: {
  //   // backgroundColor: 'white',
  //   // borderTopLeftRadius: 50,
  //   // borderTopRightRadius: 50,
  //   paddingVertical: 40,
  //   // marginTop: -70,
  //   // height: Dimensions.get('window').height * 0.6,
  //   backgroundColor: 'red'
  // },
  secondrowdiv: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#DFDDDD',
    paddingHorizontal: 10,
    paddingVertical: 20,
    // marginHorizontal: 10,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
  },
  deliverytime: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 15,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    backgroundColor: '#009987',
  },
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 100,
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
  dialericon: {
    width: 45,
    height: 45,
    backgroundColor: '#009987',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,

  },
  clockicon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 153, 135, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10
  },
  homeicon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 224, 197, 0.14)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10
  },
  MrMohantyTxt: {
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '600',
    color: '#222222'
  },
  thirtyMinsTxt: {
    fontSize: 10,
    fontFamily: 'Mulish',
    fontWeight: '700',
    color: '#030919'
  },
});
