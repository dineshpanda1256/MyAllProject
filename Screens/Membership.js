import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bgImage from '../Assets/Image/greenBackground.png';
import LinearGradient from 'react-native-linear-gradient';

export default function Membership1({navigation}) {
  return (
    // <View>
    <ImageBackground source={bgImage} style={styles.container}>
      <View style={styles.goPremiumDiv}>
        <Text
          style={styles.goPremiumTxt}
          onPress={() => navigation.navigate('Refer')}>
          Go Premium
        </Text>
      </View>
      <View style={styles.midBoxDiv}>
        <View style={styles.midBox}>
          <Text style={styles.midBoxTxt}>SOS for premium members</Text>
          <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
          <Text style={styles.midBoxTxt}>appointment remainder</Text>
          <Text style={styles.midBoxTxt}>Mental support</Text>
          <Text style={styles.midBoxTxt}>Questionnaire</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient
          colors={['#00E0C5', '#009987']}
          style={styles.takeFreeTrialBtnDiv}>
          <TouchableOpacity
            style={styles.takeFreeTrialBtn}
            onPress={() => navigation.navigate('Membership2')}>
            <Text style={styles.takeFreeTrialBtnTxt}>Take a free Trial</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  goPremiumDiv: {
    height: Dimensions.get('window').height * 0.23,
    justifyContent: 'flex-end',
  },
  goPremiumTxt: {
    color: '#fff',
    // fontFamily: 'Mulish',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  midBoxDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.6,
    // backgroundColor: 'blue',
  },
  midBox: {
    width: 330,
    height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingLeft: 25,
    paddingVertical: 15,
    marginVertical: 20,
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 13,
  },
  takeFreeTrialBtnDiv: {
    width: 356,
    padding: 5,
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
  takeFreeTrialBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeFreeTrialBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
