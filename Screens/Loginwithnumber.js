import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

// const Login = (props) =>
const Loginwithnumber = ({ navigation }) => {


  const [type, setType] = useState('');
  const [adharnum, setMobile] = useState('');
  const [adharnumerr, setAdharnumerr] = useState(false);
  const [adharnumerr1, setAdharnumerr1] = useState(false);
  // console.log(email, reg.test(email));
  console.log('type', type);




  function handleLogin() {

    if (adharnum.length == 10) {
      setAdharnumerr(false);
      //  alert('Suss');
      navigation.navigate('Otp_verification');
    }

    else if (adharnum.length == 0) {
      setAdharnumerr(true);
    }
    else if (1 <= adharnum.length < 10) {
      setAdharnumerr(false);
      setAdharnumerr1(true);
    }

  }



  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.startedbtn}>
          <TouchableOpacity>
            <Icon1
              name="left"
              style={styles.backicon}
              onPress={() => {
                navigation.goBack();
              }}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View style={styles.fdiv}>
        <Text style={styles.heading}>Welcome to Ckare!</Text>
        <Text style={styles.inserttext}>Insert your phone number to start</Text>

        <View style={styles.enterUserIdTxtDiv}>
          <Image
            style={styles.flagimg}
            source={require('../Assets/Image/flag.png')}
          />
          <Text style={styles.enterUserIdTxt}>+91</Text>
          <TouchableOpacity>
            <TextInput
              onChangeText={setMobile}

              keyboardType="numeric"
              maxLength={10}

              style={styles.enterUserIdTxt2}
            />

          </TouchableOpacity>
        </View>
        {adharnumerr && (
          <Text style={{ marginLeft: 25, color: 'red' }}>
            Enter your mobile number
          </Text>
        )}
        {adharnumerr1 && (<Text style={{ marginLeft: 25, color: 'red' }}>
          Phone number must be 10 digits
        </Text>)

        }
      </View>


      <View style={styles.mainview}>
        <View style={styles.detailsview}>
          <TouchableOpacity
            onPress={() => handleLogin()}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <LinearGradient
        colors={['red', 'green', 'yellow']}
        style={styles.linearGradient}></LinearGradient>
    </View>


    // Otp_verification
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  fdiv: {
    paddingHorizontal: 30,
    paddingVertical: 40,

  },
  heading: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
  numberinput: {
    fontSize: 25,
    borderBottomWidth: 1,
    width: Dimensions.get('window').width * 0.7,
    borderColor: 'gray',
    marginLeft: 50,
    marginTop: -34,
    marginBottom: 30,
  },
  img2: {
    position: 'relative',
    left: -15,
    top: 25,
  },
  continuebtn: {
    paddingLeft: 130,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    marginTop: 40,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: '#009987',
  },
  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 16,
    padding: 10,
    width: 40,
  },
  enterUserIdTxtDiv: {
    borderBottomColor: '#DEE1E6',
    borderBottomWidth: 1,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 40,
    marginBottom: 30,

  },
  enterUserIdTxt: {
    color: '#9093A3',
    fontSize: 18,
    fontFamily: 'Mulish',
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',

    alignItems: 'center',
  },
  enterUserIdTxt2: {
    color: '#222222',
    fontSize: 18,
    fontFamily: 'Mulish',
    fontWeight: '600',
    marginLeft: 10,
    color: 'black',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.6,
  },
  startedbtn: {
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 20,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.85,
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
  flagimg: {
    width: 40,
    height: 40,
  },
});
export default Loginwithnumber;
