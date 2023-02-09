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

export default function AddressAndPayment1({navigation}) {
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
                navigation.goBack();
              }}
            />
          </View>
          <View>
            <Text style={styles.selectAddressTxt}>Select Address</Text>
          </View>
        </View>
      </View>

      {/* 2nd row */}
      <View style={styles.secondrow}>
        <TouchableOpacity
          style={styles.secondrowDiv}
          onPress={() => navigation.navigate('AddressAndPayment2')}>
          <Text style={styles.addNewAddressTxt}>Add New Address</Text>
        </TouchableOpacity>
      </View>

      {/* 3rd row */}
      <View style={styles.thirdrow}>
        <View style={styles.thirdrowDiv}>
          <View style={styles.row1}>
            <View style={styles.row1LeftDiv}>
              <View>
                <Text style={styles.nameTxt}>Sagarika Mohanty</Text>
              </View>
              <View style={styles.homeTxtDiv}>
                <Text style={styles.homeTxt}>HOME</Text>
              </View>
            </View>
            <View style={styles.row1RightDiv}>
              <Entypo name="dots-three-vertical" size={15} color="#222222" />
            </View>
          </View>
          <View style={styles.row2}>
            <Text style={styles.addressTxt}>
              Nandan Vihar, Patia, Bhubaneswar,
            </Text>
            <Text style={styles.addressTxt}>Odisha - 751024</Text>
          </View>
          <View style={styles.row3}>
            <Text style={styles.numberTxt}>+91 7896541237</Text>
          </View>
        </View>
      </View>
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
    fontFamily: "Mulish",
  },

  // second row
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00E0C5',
    borderWidth: 1,
    borderRadius: 10,
  },
  addNewAddressTxt: {
    color: '#009987',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: "Mulish",
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
    fontFamily: "Mulish",
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
    fontFamily: "Mulish",
  },
  row2: {
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  addressTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: "Mulish",
  },
  row3: {
    justifyContent: 'flex-start',
  },
  numberTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: "Mulish",
  },
});
