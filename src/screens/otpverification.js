import * as React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import DotIcon from 'react-native-vector-icons/Entypo';

function Otp({navigation}) {
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const pin5Ref = useRef();
  const pin6Ref = useRef();
  const pin7Ref = useRef();
  const pin8Ref = useRef();
  const [otp, setOtp] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

        <View style={styles.leftIconRow}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => {
              navigation.goBack();
            }}>
            <LeftIcon name="left" size={20} color="#626262" />
          </TouchableOpacity>
        </View>

        <View style={{height: Dimensions.get('screen').height * 0.06}}></View>

        <View style={styles.pleaseVerificationTxtRow}>
          <Text style={styles.pleaseVerificationTxt}>Please Verification!</Text>
        </View>

        <View style={styles.insertOtpTxtRow}>
          <Text style={styles.insertOtpTxt}>
            Insert your OTP Code to continue
          </Text>
        </View>

        <View style={{height: Dimensions.get('screen').height * 0.07}}></View>

        <View>
          <View style={styles.pleaseVerificationTxtRow}>
            <Text style={styles.pleaseVerificationTxt}>
              Verify Your Phone Number
            </Text>
          </View>
          <View style={styles.otpCircleMainDiv}>
            <TextInput
              ref={pin1Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 1: text});
                text && pin2Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin2Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 2: text});
                text ? pin3Ref.current.focus() : pin1Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin3Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 3: text});
                text ? pin4Ref.current.focus() : pin2Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin4Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 4: text});
                !text && pin3Ref.current.focus();
              }}
            />
          </View>
          <View style={styles.didntReceiveResendCodeTxtDiv}>
            <View>
              <Text style={styles.didntReceiveCodeTxt}>
                Didn't receive the code
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.resendCodeTxt}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

        <View>
          <View style={styles.pleaseVerificationTxtRow}>
            <Text style={styles.pleaseVerificationTxt}>
              Verify Your Email Id
            </Text>
          </View>
          <View style={styles.otpCircleMainDiv}>
            <TextInput
              ref={pin5Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 1: text});
                text && pin6Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin6Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 1: text});
                text ? pin7Ref.current.focus() : pin5Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin7Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 3: text});
                text ? pin8Ref.current.focus() : pin6Ref.current.focus();
              }}
            />

            <TextInput
              ref={pin8Ref}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry={true}
              style={styles.inputfield}
              onChangeText={text => {
                setOtp({...otp, 4: text});
                !text && pin7Ref.current.focus();
              }}
            />
          </View>
          <View style={styles.didntReceiveResendCodeTxtDiv}>
            <View>
              <Text style={styles.didntReceiveCodeTxt}>
                Didn't receive the code
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.resendCodeTxt}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

        <View style={styles.btnMainDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search_location')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.btnDiv}>
              <Text style={styles.btnText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  leftIcon: {
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 50,
    backgroundColor: '#EFF3FA',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pleaseVerificationTxtRow: {
    marginBottom: 5,
  },
  pleaseVerificationTxt: {
    color: '#222222',
    fontSize: 18,
    fontFamily: 'Mulish',
    fontWeight: '700',
  },
  // pleaseFillTxtRow: {
  //     marginBottom: 40,
  // },
  insertOtpTxt: {
    color: '#9093A3',
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },

  otpCircleMainDiv: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otpCircleDiv: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  didntReceiveResendCodeTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  didntReceiveCodeTxt: {
    color: '#9093A3',
    fontSize: 12,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
  resendCodeTxt: {
    color: '#1D6AFF',
    fontSize: 14,
    fontFamily: 'Mulish',
    fontWeight: '500',
  },

  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.8,
    height:50,
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
  inputfield: {
    borderWidth: 1,
    borderColor: '#DEE1E6',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 60,
  },
});

export default Otp;
