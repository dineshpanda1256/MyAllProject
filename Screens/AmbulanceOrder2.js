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
} from 'react-native';
import bgImg from '../Assets/Image/maps.png';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import LinearGradient from 'react-native-linear-gradient';
export default function AmbulanceOrder2({navigation}) {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TouchableOpacity style={styles.horizontalLinesIconDiv}>
        <Foundation name="graph-horizontal" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: Dimensions.get('window').height * 0.55}}></View>

        <View style={styles.whiteMainDiv}>
          <View style={styles.whiteDiv}>
            {/*  rectangle icon */}
            <View style={styles.rectangleImgDiv}>
              <Image source={require('../Assets/Image/Rectangle246.png')} />
            </View>

            {/* Ckare ambulance service div */}
            <View style={styles.CkareAmbulanceMainDiv}>
              <View style={styles.ambulanceImgDiv}>
                <Image
                  source={require('../Assets/Image/ambulanceImg.jpg')}
                  style={styles.ambulanceImg}
                />
              </View>
              <View>
                <Text style={styles.CkareAmbulanceTxt}>
                  Ckare Ambulance Service
                </Text>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <AntDesign name="star" size={10} color="#FBBC05" />
                  <AntDesign name="star" size={10} color="#FBBC05" />
                  <AntDesign name="star" size={10} color="#FBBC05" />
                  <AntDesign name="star" size={10} color="#FBBC05" />
                  <AntDesign name="star" size={10} color="#FBBC05" />
                </View>
              </View>
            </View>

            {/* Arrival time vehicle no. and otp div  */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.arrivalTimePriceDiv}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{width: Dimensions.get('window').width * 0.3}}>
                    <Text style={styles.arrivalTimeTxt}>Arrival Time</Text>
                    <Text style={styles.arrivalTimeTxt}>5 min</Text>
                  </View>
                  <View style={{width: Dimensions.get('window').width * 0.35}}>
                    <Text style={styles.arrivalTimeTxt}>Vehicle No.</Text>
                    <Text style={styles.arrivalTimeTxt}>OD 33 1234</Text>
                  </View>
                  <View style={{width: Dimensions.get('window').width * 0.3}}>
                    <Text style={styles.arrivalTimeTxt}>OTP</Text>
                    <Text style={styles.arrivalTimeTxt}>1234</Text>
                  </View>
                </View>
                <View style={styles.nameImgPhnIconMainDiv}>
                  <View style={styles.nameImgPhnIconDiv}>
                    <View style={styles.nameImgDiv}>
                      <View>
                        <Image
                          source={require('../Assets/Image/Topimg.png')}
                          style={{width: 50, height: 50}}
                        />
                      </View>
                      <View>
                        <Text style={styles.mrMohantyTxt}>Mr. Mohanty</Text>
                      </View>
                    </View>
                    <View style={styles.phoneIconDiv}>
                      <FontAwesome
                        name="phone-square"
                        size={35}
                        color="#009987"
                        style={styles.phoneIcon}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* button */}
            <View style={{justifyContent: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <TouchableOpacity
                    style={styles.cancelBtnDiv}
                    onPress={() => navigation.navigate('CancelRide')}>
                    <View style={styles.cancelBtn}>
                      <Text style={styles.cancelBtnTxt}>Cancel</Text>
                    </View>
                  </TouchableOpacity>
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
    // height: Dimensions.get('window').height * 0.5,
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
  CkareAmbulanceMainDiv: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ambulanceImgDiv: {
    width: 65,
    height: 55,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ambulanceImg: {
    width: 48,
    height: 30,
  },
  CkareAmbulanceTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  arrivalTimePriceDiv: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    width: Dimensions.get('window').width * 0.85,
    // height: Dimensions.get('window').height * 0.19,
    padding: 10,
    marginBottom: 20,
  },
  arrivalTimeTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  nameImgPhnIconMainDiv: {
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  nameImgPhnIconDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameImgDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mrMohantyTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 20,
  },
  phoneIcon: {
    borderRadius: 50,
    borderColor: '#00E0C5',
  },

  // button
  cancelBtnDiv: {
    width: Dimensions.get('window').width * 0.88,
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00E0C5',
  },
  cancelBtn: {
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#000',
    // textShadowOffset: 5,
  },
});
