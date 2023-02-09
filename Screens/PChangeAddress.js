import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function PChangeAddress({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('screen').height * 0.05}}></View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* first row */}
        <View style={styles.firstrow}>
          <View style={styles.firstrowDiv}>
            <View>
              <AntDesign
                name="left"
                size={20}
                color="#666"
                style={styles.leftIcon}
                onPress={() => navigation.navigate('AddressAndPayment1')}
              />
            </View>
            <View>
              <Text style={styles.addNewAddressTxt}>Add New Address</Text>
            </View>
          </View>
        </View>

        {/* 2nd row */}
        <View style={styles.imgDiv}>
          <Image
            source={require('../Assets/Image/location.png')}
            style={styles.mapImg}
          />
        </View>

        {/* 3rd row  */}
        <View style={styles.thirdrowDiv}>
          <Text style={styles.headingTxts}>Full Name</Text>
          <TextInput
            placeholder=" Sagarika Mohanty"
            style={styles.mediumInputDiv}
          />
          <Text style={styles.headingTxts}>Address</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.addressInputDiv}
          />
          <Text style={styles.headingTxts}>District</Text>
          <TextInput style={styles.mediumInputDiv} />
          <Text style={styles.headingTxts}>City</Text>
          <TextInput style={styles.mediumInputDiv} />
          <View style={styles.stateAndPincodeDiv}>
            <View>
              <Text style={styles.headingTxts}>State</Text>
              <TextInput style={styles.smallInputDiv} />
            </View>
            <View>
              <Text style={styles.headingTxts}>Pin Code</Text>
              <TextInput style={styles.smallInputDiv} />
            </View>
          </View>
          <Text style={styles.headingTxts}>Phone Number</Text>
          <TextInput
            style={styles.mediumInputDiv}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>

        {/* button */}
        <View style={{alignItems: 'center'}}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.addAddressBtnDiv}>
            <TouchableOpacity
              style={styles.addAddressBtn}
              onPress={() => navigation.navigate('PBookingScreen')}>
              <Text style={styles.addAddressBtnTxt}>Add Address</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  // first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
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
  addNewAddressTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },

  // 2nd row
  imgDiv: {
    marginBottom: 30,
    borderRadius: 11,
  },
  mapImg: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.23,
    borderRadius: 11,
  },

  // 3rd row
  headingTxts: {
    fontSize: 14,
    fontWeight: '400',
    color: '#222222',
    marginBottom: 5,
  },
  mediumInputDiv: {
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.05,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
  },
  addressInputDiv: {
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.1,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
    textAlignVertical: 'top',
  },
  stateAndPincodeDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInputDiv: {
    width: Dimensions.get('window').width * 0.44,
    height: Dimensions.get('window').height * 0.05,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
  addAddressBtnDiv: {
    marginVertical: 10,
    width: 320,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addAddressBtn: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAddressBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
});
