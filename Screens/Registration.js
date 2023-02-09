import React,{useState} from 'react';
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
// import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

// const Login = (props) =>
const Registration = ({ navigation }) => {

  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [adharnum, setAdharnum] = useState('');

  const [typeerr, setTypeerr] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [doberr, setDoberr] = useState(false);
  const [adharnumerr, setAdharnumerr] = useState(false);
  const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  // console.log(email, reg.test(email));
  console.log('type', type);

  function handleLogin() {
    if (type.length > 2) {
      setTypeerr(false);
      if (reg.test(email)) {
        setEmailerr(false);
        if (dob.length >= 8 || dob.length <= 10) {
          setDoberr(false);
          if (adharnum.length == 12) {
            setAdharnumerr(false);
            //  alert('Suss');
            navigation.navigate('Location');
          } else {
            setAdharnumerr(true);
          }
        } else {
          setDoberr(true);
        }
      } else {
        setEmailerr(true);
      }
    } else {
      setTypeerr(true);
    }
  }
  const [date, setDate] = useState(new Date());
  const [mode, setmode] = useState('date');
  const [show, setshow] = useState(false);
  const [text, setText] = useState('DD/MM/YYYY');
  const onChage = (event, selectedDate) => {
    const currentDate = selectedDate || Date;
    setshow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };
  const showMode = currentMode => {
    setshow(true);
    setmode(currentMode);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <View>
        <View style={styles.startedbtn}>
          <Icon1
            name="left"
            style={styles.backicon}
            onPress={() => {
              navigation.goBack();
            }}
            size={20}
          />
        </View>
        <View style={styles.fdiv}>
          <Text style={styles.heading}>Please Register</Text>
          <Text style={styles.inserttext}>Please fill all the details.</Text>
        </View>

        <View style={styles.reginputdiv}>
          <View style={styles.input}>
            <Icon2 name="user" size={20} />
            <TextInput
              style={styles.inputtext}
              onChangeText={setType}
              placeholder="Full name"></TextInput>
          </View>
          {typeerr && (
            <Text style={{ marginLeft: 25, color: 'red' }}>Required</Text>
          )}

          <View style={styles.input}>
            <Icon3 name="email-outline" size={20} />
            <TextInput
              onChangeText={setEmail}
              style={styles.inputtext}
              placeholder="Email Id"></TextInput>
          </View>
          {emailerr && (
            <Text style={{ marginLeft: 25, color: 'red' }}>
              Please enter correct email
            </Text>
          )}

          <View style={styles.input}>
            <TouchableOpacity>
            <Icon4 name="calendar" size={20} title="DatePicker"
                onPress={() => showMode('date')} />
            </TouchableOpacity>
            
            <TextInput
              onChangeText={setDob}
              style={styles.inputtext}
              keyboardType="numeric"
              maxLength={10}
              value={text}
               ></TextInput>
          </View>
          {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChage}
              />
            )}
          {doberr && (
            <Text style={{ marginLeft: 25, color: 'red' }}>
              Please enter correct DOB
            </Text>
          )}

          <View style={styles.input}>
            <Icon5 name="card-text-outline" size={20} />
            <TextInput
              onChangeText={setAdharnum}
              style={styles.inputtext}
              keyboardType="numeric"
              maxLength={12}
              placeholder="Aadhar Number"></TextInput>
          </View>
          {adharnumerr && (
            <Text style={{ marginLeft: 25, color: 'red' }}>
              Aadhar numbernmust 12 digit
            </Text>
          )}
        </View>
        {/* <TouchableOpacity>
        <Text style={styles.continuebtn} onPress={() => navigation.navigate('Med')}>Continue</Text>
      </TouchableOpacity> */}

        <View style={styles.mainview}>
          <View style={styles.detailsview}>
            <TouchableOpacity onPress={() => handleLogin()}>
              <LinearGradient
                colors={['#00E0C5', '#009987']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  reginputdiv: {
    justifyContent: 'space-evenly',
    marginBottom: 50,
    marginTop: 20,
    height: 350,
  },
  fdiv: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
  },
  inserttext: {
    fontSize: 13,
    paddingTop: 5,
  },
  inputtext: {
    // borderColor: '#DEE1E6',
    // borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    width:Dimensions.get('screen').width*0.75,
    fontFamily:"Mulish",
    color:"#717171"
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DEE1E6',
    borderBottomWidth: 1,

    marginHorizontal: 30,
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
    marginBottom: 30,
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
export default Registration;
