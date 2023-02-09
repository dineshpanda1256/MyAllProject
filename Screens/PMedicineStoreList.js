import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';

export default function MedicineStoreList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* first row */}
      <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

      <View style={styles.firstrow}>
        <View style={styles.firstrowDiv}>
          <View>
            <AntDesign
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
              onPress={() => {
                navigation.navigate('PatholabDetailes');
              }}
            />
          </View>
        </View>
      </View>
      {/*1st row  */}
      <TouchableOpacity style={{marginBottom: 15}}>
        <Text>Please enter your MRN Number </Text>
      </TouchableOpacity>
      {/* 2nd row */}
      <View style={styles.secondrow}>
        <TouchableOpacity
          style={styles.secondrowDiv}
          onPress={() => navigation.navigate('AllTestListScreen')}>
          <TextInput
            placeholder="Enter MRN Number"
            style={styles.addNewAddressTxt}
          />
        </TouchableOpacity>
      </View>
      {/* second Middel row div */}
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
        <Text style={{fontSize: 12}}>OR</Text>
      </View>
      {/* 3rd row */}
      <View style={styles.thirdrow}>
        <View style={styles.thirdrowDiv}>
          <View style={styles.row1}>
            <View style={styles.row1LeftDiv}>
              <View style={{padding: 1}}>
                <Text>Please upload images of your prescription </Text>
              </View>
            </View>
          </View>

          <View style={styles.secondrow1}>
            <View style={styles.secondrowDiv1}>
              <View>
                <FontAwesome5Icons name="file" size={15} color={'#009987'} />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={styles.addNewAddressTxt}>Upload Prescription</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* 3rd row end */}
      <View style={{height: Dimensions.get('screen').height * 0.33}}></View>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('AllTestListScreen')}>
        <LinearGradient
          colors={['#00E0C5', '#009987']}
          style={styles.takeFreeTrialBtnDiv}>
          <View style={styles.takeFreeTrialBtn}>
            <Text style={styles.takeFreeTrialBtnTxt}>Get Your Medicines</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  // first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  firstrowDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },
  selectAddressTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },

  // second row
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondrow1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  secondrowDiv1: {
    width: Dimensions.get('window').width * 0.82,
    height: Dimensions.get('window').height * 0.07,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#009987',
    borderWidth: 1,
    borderRadius: 10,
  },

  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.07,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 10,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 10,
  },
  addNewAddressTxt: {
    color: '#222B45',
    fontSize: 12,
    fontWeight: '400',
  },

  // third row
  thirdrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 7,
    marginTop: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  row1LeftDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  nameTxt: {
    color: '#222B45',
    fontSize: 14,
    fontWeight: '500',
  },
  homeTxtDiv: {
    width: 45,
    height: 17,
    backgroundColor: '#c4c4c4',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeTxt: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '700',
  },
  row2: {
    marginBottom: 10,
    // justifyContent: 'flex-start',
  },
  addressTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
  },
  row3: {
    justifyContent: 'flex-start',
  },
  numberTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
  },
  takeFreeTrialBtnDiv: {
    marginTop: 10,
    width: Dimensions.get('screen').width * 0.85,
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
    marginBottom: 20,
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
