import React, {useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Wrong_otp = ({navigation}) => {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.startedbtn}>
        <Icon1
          name="left"
          style={styles.backicon}
          onPress={() => navigation.navigate('Veri')}
          size={20}
        />
      </View>

      <View style={styles.fdiv}>
        <Text style={styles.heading}>Please Verification!</Text>
        <Text style={styles.inserttext}>Insert your OTP code to continue</Text>
        <View style={styles.otpdiv}>
          <TextInput
            maxLength={1}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
            keyboardType="numeric"
            style={styles.otpinput}></TextInput>

          <TextInput
            maxLength={1}
            returnKeyType="next"
            onSubmitEditing={() => ref_input3.current.focus()}
            ref={ref_input2}
            keyboardType="numeric"
            style={styles.otpinput}></TextInput>

          <TextInput
            maxLength={1}
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
            keyboardType="numeric"
            style={styles.otpinput}></TextInput>

          <TextInput
            maxLength={1}
            ref={ref_input4}
            keyboardType="numeric"
            style={styles.otpinput}></TextInput>
        </View>

        <View style={styles.notreceivediv}>
          <Text style={styles.wrongcode}>Wrong OTP code</Text>
          <Text style={styles.resend}>Resend code</Text>
        </View>
      </View>

      <View style={styles.mainview}>
        <View style={styles.detailsview}>
          <TouchableOpacity onPress={() => navigation.navigate('Letsign')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Continue</Text>
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
    borderColor: 'gray',
    width: 280,
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
  otpdiv: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },
  otpinput: {
    borderBottomWidth: 1,
    borderColor: '#DEE1E6',
    width: Dimensions.get('window').width * 0.15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  notreceivediv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
  },
  resend: {
    color: '#1D6AFF',
  },
  wrongcode: {
    color: 'red',
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
});
export default Wrong_otp;
