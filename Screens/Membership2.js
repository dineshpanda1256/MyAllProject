import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import bgImage from '../Assets/Image/greenBackground.png';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Membership2() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <ScrollView>
        <View style={styles.CkareLogoDiv}>
          <Image
            source={require('../Assets/Image/cKareLogo.png')}
            style={styles.CkareLogoImg}
          />
          <Text
            style={styles.premiumTxt}>
            Premium Member
          </Text>
          <Text style={styles.firstBecameTxt}>
            First became member on 08 jan 2022
          </Text>
        </View>
        <View style={styles.midBoxDiv}>
          <View style={styles.midBox}>
            <View style={styles.benefitsTxtDiv}>
              <Text style={styles.benefitsTxt}>Benefits</Text>
            </View>
            <Text style={styles.midBoxTxt}>SOS for premium members</Text>
            <Text style={styles.midBoxTxt}>Just type and get doctors.</Text>
            <Text style={styles.midBoxTxt}>appointment remainder</Text>
            <Text style={styles.midBoxTxt}>Mental support</Text>
            <Text style={styles.midBoxTxt}>Questionnaire</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <View style={styles.bottomDiv}>
            <View>
              <Text style={styles.yourMembershipTxt}>Your Membership</Text>
              <Text style={styles.expiresTxt}>Expires in 22 days</Text>
            </View>
            <View>
              <View style={{ alignItems: 'center' }}>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.extendNowBtnDiv}>
                  <TouchableOpacity
                    style={styles.extendNowBtn}
                    onPress={() => navigation.navigate('Membership3')}>
                    <Text style={styles.extendNowBtnTxt}>Extend Now</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: Dimensions.get('window').height * 0.1 }}></View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CkareLogoDiv: {
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'flex-end',
    marginVertical: 35,
    paddingLeft: 35,
  },
  premiumTxt: {
    letterSpacing: 5,
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    marginVertical: 10,
    fontFamily: "Mulish",
  },
  firstBecameTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
    fontFamily: "Mulish",
  },
  midBoxDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: Dimensions.get('window').height * 0.5,
    marginVertical: 20,
  },
  midBox: {
    width: Dimensions.get('screen').width * 0.85,
    // height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingLeft: 25,
    paddingVertical: 15,
    // marginBottom: 10,
  },
  benefitsTxtDiv: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginRight: 20,
    paddingBottom: 15,
    marginBottom: 10,
  },
  benefitsTxt: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    fontFamily: "Mulish",
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 11,
    fontFamily: "Mulish",
  },
  bottomDiv: {
    width: Dimensions.get('screen').width * 0.85,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: 35,
  },
  yourMembershipTxt: {
    fontSize: 10,
    fontWeight: '600',
    color: '#fff',
    fontFamily: "Mulish",
  },
  expiresTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    fontFamily: "Mulish",
  },
  extendNowBtnDiv: {
    paddingVertical: 15,
    paddingHorizontal: 5,
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
  extendNowBtn: {
    width: Dimensions.get('screen').width * 0.3,
    // height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extendNowBtnTxt: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "Mulish",
    // marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
