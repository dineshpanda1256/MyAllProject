import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button1 from '../Components/button';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Rate = ({navigation}) => {
  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={['#009987', '#00E0C5', '#009987']}
      style={styles.linearGradient}>
      <View>
        <View style={styles.startedbtn}>
          <Icon1
            name="left"
            style={styles.backicon}
            onPress={() => navigation.navigate('Bill2')}
            size={20}
          />
        </View>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.ratediv}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -100,
            }}>
            <Image
              style={styles.img}
              source={require('../Assets/Image/Topimg.png')}
            />
            <Text style={{color: 'black', marginTop: 10}}>Mr. Mohanty</Text>
            <Image
              style={styles.img1}
              source={require('../Assets/Image/Group.png')}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: '600'}}>
              Rate your trip
            </Text>
            <Image
              style={styles.img2}
              source={require('../Assets/Image/Staricon.png')}
            />
          </View>

          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                marginLeft: 5,
                marginBottom: 5,
                fontWeight: '600',
                color: 'black',
              }}>
              Give Feedback
            </Text>
            <View style={styles.texinputdiv}>
              <TextInput
                placeholder="Write Feedback"
                style={styles.feedbackinput}></TextInput>
            </View>
          </View>

          <View style={styles.mainview}>
            <View style={styles.detailsview}>
              <TouchableOpacity onPress={() => navigation.navigate('Let')}>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.linearbutton}>
                  <Text style={styles.buttonText}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>

    // </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //     flex: 1,

  // },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ratediv: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.65,
  },
  img2: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.03,
    marginTop: 5,
  },
  feedbackinput: {
    marginHorizontal: 10,
  },
  texinputdiv: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E1E1E1',
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('window').height * 0.2,
  },
  mainview: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  linearbutton: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.8,
  },
  startedbtn: {
    borderRadius: 30,
    paddingTop: 40,
    paddingBottom: 30,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,

    alignItems: 'center',
  },
  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 16,
    padding: 10,
    width: 43,
  },
});

export default Rate;
