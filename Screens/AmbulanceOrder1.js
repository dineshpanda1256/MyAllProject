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
// import CheckBox from '@react-native-community/checkbox';

export default function AmbulanceOrder1({navigation}) {
  const [checked, setChecked] = useState('cash');

  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <TouchableOpacity style={styles.horizontalLinesIconDiv}>
        <Foundation name="graph-horizontal" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={{height: Dimensions.get('window').height * 0.45}}></View>
        <View style={styles.whiteMainDiv}>
          <View style={styles.whiteDiv}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../Assets/Image/Rectangle246.png')} />
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
                    placeholder="Patia, Bhubaneswar"
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
                    placeholder="Kanan Vihar, Bhubaneswar"
                    style={styles.patiaTxt}
                  />
                </View>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.arrivalTimePriceDiv}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.arrivalTimeTxt}>Arrival Time</Text>
                  </View>
                  <View>
                    <Text style={styles.arrivalTimeTxt}>Price</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.arrivalTimeTxt}>5 min</Text>
                  </View>
                  <View>
                    <Text style={styles.arrivalTimeTxt}>₹250</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderTopWidth: 1,
                    borderTopColor: '#e1e1e1',
                  }}>
                  <View>
                    <Text style={styles.paymentMethodTxt}>Payment Method</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: 20,
                        height: 20,
                        borderColor: '#e1e1e1',
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => setChecked('online')}>
                      <View
                        style={
                          checked == 'online'
                            ? {
                                width: 10,
                                height: 10,
                                backgroundColor: '#009987',
                                borderRadius: 10,
                              }
                            : ''
                        }></View>
                    </TouchableOpacity>
                    <View>
                      <Text
                        style={styles.onlineTxt}
                        onPress={() => setChecked('online')}>
                        Online
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: 20,
                        height: 20,
                        borderColor: '#e1e1e1',
                        borderWidth: 1,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => setChecked('cash')}>
                      <View
                        style={
                          checked == 'cash'
                            ? {
                                width: 10,
                                height: 10,
                                backgroundColor: '#009987',
                                borderRadius: 10,
                              }
                            : ''
                        }></View>
                    </TouchableOpacity>
                    <View>
                      <Text
                        style={styles.onlineTxt}
                        onPress={() => setChecked('cash')}>
                        Cash
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{height: Dimensions.get('window').height * 0.02}}></View>
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
                      onPress={() => navigation.navigate('AmbulanceOrder2')}>
                      <Text style={styles.confirmBtnTxt}>Confirm</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.cancelBtnDiv}
                    onPress={() => navigation.navigate('POrderTrackingScreen')}>
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
    // height: Dimensions.get('window').height * 0.62,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 20,
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
    padding: 10,
    marginBottom: 10,
  },
  arrivalTimeTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Mulish'
  },
  paymentMethodTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 10,
    fontFamily: 'Mulish'
  },
  onlineTxt: {
    color: '#030919',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
    fontFamily: 'Mulish'
  },
  // button
  confirmBtnDiv: {
    width: Dimensions.get('window').width * 0.42,
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
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
  cancelBtnDiv: {
    width: Dimensions.get('window').width * 0.42,
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00E0C5',
  },
  cancelBtn: {
    height: Dimensions.get('window').height * 0.062,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#000',
    // textShadowOffset: 5,
    fontFamily: 'Mulish'
  },
});
