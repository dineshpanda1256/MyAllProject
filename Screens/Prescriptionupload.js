import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Prescriptionupload = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        <Icon2
          name="chevron-with-circle-left"
          style={styles.backicon1}
          size={18}
        />
      </Text>
      <Text style={styles.Heading}>Please enter your MRN Number</Text>
      <View style={styles.INput}>
        <View style={styles.Input}>
          <TextInput
            style={styles.input}
            placeholder={'Enter MRN Number'}></TextInput>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Or}>OR</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.div}>
          <Text style={styles.txt}>
            Please upload images of your prescription
          </Text>
          <View style={styles.div1}>
            <Text style={styles.txt1}>
              <Icon1 name="addfile" style={styles.backicon} size={18} />
              Upload Prescription
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Mrnmedicinelist');
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.btn1}>Get Your Medicine</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFF',
  },
  txt1: {
    color: '#37a987',
  },
  div1: {
    alignItems: 'center',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.09,
    borderWidth: 1,
    borderColor: '#37a987',
    paddingTop: 5,
    color: '#37a987',
  },
  backicon: {
    // paddingRight: 40,
    color: '#37a987',
  },
  icon: {
    marginLeft: 20,
    marginTop: 35,
    Color: '#E1E1E1',
  },
  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.1,
    marginTop: 250,
  },
  Heading: {
    marginLeft: 20,
    marginTop: 25,
    color: 'black',
    fontSize: 13,
  },
  Or: {
    color: 'black',
    paddingVertical: 15,
  },
  input: {
    fontSize: 12,
    color: '#000000',
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 8,
    height: Dimensions.get('window').height * 0.055,
    borderColor: '#E1E1E1',
  },
  INput: {
    alignItems: 'center',
  },
  div: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.35,
    alignItems: 'center',
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  txt: {
    marginVertical: 22,
    color: 'black',
    fontSize: 13,
  },
});

export default Prescriptionupload;
