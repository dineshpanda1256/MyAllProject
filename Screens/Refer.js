import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import TopDivImg from '../Assets/Image/Rectangle247.png';


export default function Refer({navigation}) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00E0C5', '#009987']}>
        {/* Top Div */}
        <ImageBackground source={TopDivImg} style={styles.topDiv}>
          <View style={styles.firstrow}>
            <AntDesign
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
            />
          </View>
          <View style={styles.secondrow}>
            <View style={styles.secondrowDiv}>
              <View>
                <Text style={styles.referalTxt}>Referal Points</Text>
              </View>
              <View>
                <Text style={styles.referalTxt}>₹240</Text>
              </View>
              <View style={styles.transferDiv}>
                <View>
                  <Text style={styles.transferTxt}>Transfer to Account </Text>
                </View>
                <View>
                  <AntDesign
                    name="right"
                    size={13}
                    color="#ccc"
                    style={styles.rightIcon}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../Assets/Image/ReferAFriend.png')}
              style={styles.ReferAFriendImg}
            />
            <View style={styles.referDiv}>
              <Text style={styles.referTxt}>
                Refer your friends and Earn Rs.85
              </Text>
              <Text style={styles.referTxt}>cashback</Text>
            </View>
          </View>
        </ImageBackground>
        {/* Below Div */}
        <View style={styles.belowDiv}>
          <View style={styles.copyWholeDiv}>
            <View style={styles.copyDiv}>
              <View style={styles.codeTxtDiv}>
                <Text style={styles.codeTxt}>12XYZ123</Text>
              </View>
              <View style={styles.copyTxtDiv}>
                <View>
                  <FontAwesome5 name="copy" size={18} color="#009987" />
                </View>
                <View>
                  <Text style={styles.copyTxt}>Copy</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.inviteDiv}>
            <Text style={styles.inviteTxt}>
              Invite your friends to join CKARE and to get
            </Text>
            <Text style={styles.inviteTxt}>
              Rs.85 in cashback for each friend
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.takeFreeTrialBtnDiv}>
              <TouchableOpacity
                style={styles.takeFreeTrialBtn}
                onPress={() => navigation.navigate('Membership1')}>
                <Text style={styles.takeFreeTrialBtnTxt}>Invite Now</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // padding: 20,
    // backgroundColor: '#00E0C5',
  },
  // Top Div
  topDiv: {
    paddingHorizontal: 15,
    paddingTop: 20,
    height: Dimensions.get('window').height * 0.7,
    // backgroundColor: 'red',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 30,
  },
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.85,
    height: 54,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginLeft: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,

    // elevation: 1,
  },
  referalTxt: {
    color: '#222B45',
    fontSize: 16,
    // fontFamily: 'Mulish_600SemiBold',
  },
  transferDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferTxt: {
    fontWeight: '600',
    fontSize: 10,
    // text-align: center,
    letterSpacing: 0.266977,
    color: '#18ACFE',
  },
  ReferAFriendImg: {
    // marginHorizontal: 15,
    marginVertical: 30,
  },
  referDiv: {
    marginTop: 10,
    // marginBottom: 100,
  },
  referTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.300349,
    color: '#222B45',
  },

  // Below Div
  copyWholeDiv: {
    height: Dimensions.get('window').height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // height: Dimensions.get('window').height * 0.1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    // paddingHorizontal: 30,
    // paddingVertical: 5,
  },
  codeTxtDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  codeTxt: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
  },
  copyTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  copyTxt: {
    color: '#009987',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 18,
    marginLeft: 5,
  },
  inviteDiv: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  inviteTxt: {
    fontSize: 14,
    letterSpacing: 0.33,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },
  takeFreeTrialBtnDiv: {
    width: 356,
    padding: 5,
    marginBottom: 30,
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
