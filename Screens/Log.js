import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Linking} from 'react-native';

import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Dinesh = ({navigation}) => {
  return (
    <LinearGradient colors={['#009987', '#00E0C5']} style={styles.container}>
      <ScrollView>
        {/* top div */}
        <View>
          <View style={styles.firstRowImgDiv}>
            <View>
              <Image
                source={require('../Assets/Image/dinesh.png')}
                style={styles.doctorImg}
              />
            </View>
          </View>
          <View style={styles.secondRowTxtMainDiv}>
            <View style={styles.secondRowTxtDiv}>
              <Text style={styles.oneAppTxt}>One app for all your</Text>
              <Text style={styles.oneAppTxt}>Health need</Text>
              <Text style={styles.getBestExperienceTxt}>
                Get your best experience now!
              </Text>
            </View>
          </View>
        </View>

        {/* bottom div */}
        <View style={styles.bottomDiv}>
          <View style={styles.bottomWhiteDiv}>
            <View style={styles.txtAboveBtnDiv}>
              <View style={styles.welcomeTxtDiv}>
                <Text style={styles.welcomeTxt}>Welcome to Ckare!</Text>
              </View>
              <View style={styles.welcomeTxtDiv}>
                <Text style={styles.insertPhnNoTxt}>
                  Insert your phone number to started
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Loginwithnumber')}>
                <View style={styles.enterUserIdTxtDiv}>
                  <Image
                    style={styles.flagimg}
                    source={require('../Assets/Image/flag.png')}
                  />
                  <Text style={styles.enterUserIdTxt}>+91</Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 40,
                }}>
                <Text>OR</Text>
              </View>

              <View style={styles.iconview}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('http://google.com')}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('../Assets/Image/google.jpg')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('http://facebook.com')}>
                  <Icon1
                    name="facebook"
                    style={styles.facebookicon}
                    size={45}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('http://apple.com')}
                  style={styles.appleiconview}>
                  <Icon2 name="apple1" style={styles.macicon} size={23} />
                </TouchableOpacity>
              </View>
              <View
                style={{height: Dimensions.get('screen').height * 0.5}}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  firstRowImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  doctorImgDiv: {
    backgroundColor: '#088c7c',
    width: 198,
    height: 200,
    borderRadius: 100,
    // paddingBottom: 0,
    // paddingHorizontal: 30
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorImg: {
    width: 200,
    height: 200,
  },

  secondRowTxtMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondRowTxtDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.15,
  },
  oneAppTxt: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Mulish',
    fontWeight: '500',
    marginBottom: 2,
  },
  getBestExperienceTxt: {
    color: '#FAFAFA',
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 20,
  },

  // bottom div
  bottomDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomWhiteDiv: {
    width: Dimensions.get('screen').width * 1,
    height: Dimensions.get('screen').height * 0.5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  txtAboveBtnDiv: {
    paddingHorizontal: 30,
  },
  welcomeTxtDiv: {
    alignItems: 'flex-start',
  },
  welcomeTxt: {
    color: '#222222',
    fontSize: 20,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  insertPhnNoTxt: {
    color: '#9093A3',
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '500',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  enterUserIdTxtDiv: {
    borderBottomColor: '#DEE1E6',
    borderBottomWidth: 1,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  enterUserIdTxt: {
    color: '#9093A3',
    fontSize: 15,
    fontFamily: 'Mulish',
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',
  },
  enterUserIdTxt2: {
    color: '#9093A3',
    fontSize: 25,
    fontFamily: 'Mulish',
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',

    width: Dimensions.get('screen').width * 0.6,
  },
  forgotPasswordTxtDiv: {
    alignItems: 'flex-end',
  },
  forgotPasswordTxt: {
    marginTop: 10,
    color: '#1D6AFF',
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
  txtBelowBtnDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newUserTxt: {
    color: '#222222',
    fontFamily: 'Mulish',
    fontWeight: '700',
    fontSize: 14,
  },
  registerTxt: {
    color: '#009987',
    fontFamily: 'Mulish',
    fontWeight: '800',
    fontSize: 18,
  },
  flagimg: {
    width: 40,
    height: 40,
  },
  iconview: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    paddingRight: 6,
  },
  facebookicon: {
    color: '#0163E0',
  },
  appleiconview: {
    borderRadius: 70,
    backgroundColor: 'black',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  macicon: {
    color: 'white',
    marginRight: 1,
    marginBottom: 2,
  },
});
export default Dinesh;