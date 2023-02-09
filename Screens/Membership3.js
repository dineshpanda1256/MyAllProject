import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import bgImage from '../Assets/Image/greenBackground.png';
import LinearGradient from 'react-native-linear-gradient';

export default function Membership3({navigation}) {
  const [checked, setChecked] = useState('first');

  return (
    // <View>
    <ImageBackground source={bgImage} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.goPremiumDiv}>
          <Text
            style={styles.goPremiumTxt}>
            Go Premium
          </Text>
        </View>
        <View style={styles.midBoxDiv}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            persistentScrollbar>
            <TouchableOpacity
              style={[
                styles.midBox,
                checked == 'first'
                  ? {height: 360}
                  : {height: 300, marginTop: 50},
              ]}
              onPress={() => setChecked('first')}>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'first'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                SOS for premium members
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'first'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Just type and get doctors.
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'first'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                appointment remainder
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'first'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Mental support
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'first'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Questionnaire
              </Text>
              <View style={styles.midBoxbottomdiv}>
                <View style={styles.midBoxbottomdivleft}>
                  <Text style={styles.midBoxbottomdiv400}>₹400</Text>
                  <Text style={styles.midBoxbottomdiv800}>₹800</Text>
                </View>
                <View style={styles.midBoxbottomdivright}>
                  <Text style={styles.midBoxbottomdiv1month}>1 Month</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.midBox,
                checked == 'second'
                  ? {height: 360}
                  : {height: 300, marginTop: 50},
              ]}
              onPress={() => setChecked('second')}>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'second'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                SOS for premium members
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'second'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Just type and get doctors.
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'second'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                appointment remainder
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'second'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Mental support
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'second'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Questionnaire
              </Text>
              <View style={styles.midBoxbottomdiv}>
                <View style={styles.midBoxbottomdivleft}>
                  <Text style={styles.midBoxbottomdiv400}>₹600</Text>
                  <Text style={styles.midBoxbottomdiv800}>₹1000</Text>
                </View>
                <View style={styles.midBoxbottomdivright}>
                  <Text style={styles.midBoxbottomdiv1month}>3 Month</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.midBox,
                checked == 'third'
                  ? {height: 360}
                  : {height: 300, marginTop: 50},
              ]}
              onPress={() => setChecked('third')}>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'third'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                SOS for premium members
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'third'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Just type and get doctors.
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'third'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                appointment remainder
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'third'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Mental support
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'third'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Questionnaire
              </Text>
              <View style={styles.midBoxbottomdiv}>
                <View style={styles.midBoxbottomdivleft}>
                  <Text style={styles.midBoxbottomdiv400}>₹800</Text>
                  <Text style={styles.midBoxbottomdiv800}>₹1200</Text>
                </View>
                <View style={styles.midBoxbottomdivright}>
                  <Text style={styles.midBoxbottomdiv1month}>6 Month</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.midBox,
                checked == 'fourth'
                  ? {height: 360}
                  : {height: 300, marginTop: 50},
              ]}
              onPress={() => setChecked('fourth')}>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'fourth'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                SOS for premium members
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'fourth'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Just type and get doctors.
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'fourth'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                appointment remainder
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'fourth'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Mental support
              </Text>
              <Text
                style={[
                  styles.midBoxTxt,
                  checked == 'fourth'
                    ? {marginVertical: 10}
                    : {marginVertical: 5},
                ]}>
                Questionnaire
              </Text>
              <View style={styles.midBoxbottomdiv}>
                <View style={styles.midBoxbottomdivleft}>
                  <Text style={styles.midBoxbottomdiv400}>₹1200</Text>
                  <Text style={styles.midBoxbottomdiv800}>₹1800</Text>
                </View>
                <View style={styles.midBoxbottomdivright}>
                  <Text style={styles.midBoxbottomdiv1month}>12 Month</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* button */}
        <View style={{alignItems: 'center'}}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.takeFreeTrialBtnDiv}>
            <TouchableOpacity
              style={styles.takeFreeTrialBtn}
              onPress={() => navigation.navigate('BottomNavigator')}>
              <Text style={styles.takeFreeTrialBtnTxt}>Become a Member</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  goPremiumDiv: {
    height: Dimensions.get('window').height * 0.23,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  goPremiumTxt: {
    color: '#fff',
    // fontFamily: 'Mulish',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  midBoxDiv: {
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    height: Dimensions.get('window').height * 0.55,
  },
  midBox: {
    width: Dimensions.get('screen').width * 0.82,
    // height: 360,
    borderRadius: 20,
    backgroundColor: '#fafafa54',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },
  midBoxTxt: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    // lineHeight: 23,
    color: '#fff',
    zIndex: 1,
    marginVertical: 10,
  },
  midBoxbottomdiv: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopColor: '#fff',
    borderTopWidth: 1,
    paddingVertical: 20,
    marginTop: 20,
  },
  midBoxbottomdivleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  midBoxbottomdiv400: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',
    marginRight: 15,
  },
  midBoxbottomdiv800: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    textDecorationLine: 'line-through',
  },
  midBoxbottomdivright: {
    // width: 80,
    // height: 25,
    // backgroundColor: 'blue',
    paddingVertical: 5,
  },
  midBoxbottomdiv1month: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 15,
  },
  takeFreeTrialBtnDiv: {
    width: Dimensions.get('screen').width* 0.85,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
  },
  takeFreeTrialBtn: {
    height: 45,
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
