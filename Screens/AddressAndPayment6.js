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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import AddressAndPaymentComponent from '../Components/PaymentSummary';

export default function AddressAndPayment6({navigation}) {
  const [activeService, setActiveService] = React.useState('call');

  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('screen').height * 0.03}}></View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* first row */}

        {/* 2nd row */}
        <AddressAndPaymentComponent />
        {/* 3rd row  */}
        {/* payment method div */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.paymentMethodMainDiv}>
            <View>
              <Text style={styles.paymentSummaryTxt}>
                Deliver To Sagarika Mohanty, Nandan Vihar, Patia, Bhubaneswar,
                751024
              </Text>
            </View>
            <View>
              <Text style={styles.paymentSummaryTxt}>
                Deliver By 26 Feb 2022 | 10.00 PM
              </Text>
            </View>
            <TouchableOpacity
              style={styles.chnageaddress}
              onPress={() => navigation.navigate('AddAddress')}>
              <Text style={{color: '#00E0C5'}}>Change Address</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* button */}
        <View style={{alignItems: 'center'}}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.addAddressBtnDiv}>
            <TouchableOpacity style={styles.addAddressBtn}>
              <Text style={styles.addAddressBtnTxt}>Procced to Pay</Text>
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
    // height: Dimensions.get('window').height * 0.23,
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
    // height: Dimensions.get('window').height * 0.05,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    padding: 5,
  },
  addressInputDiv: {
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.1,
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
    // height: Dimensions.get('window').height * 0.05,
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
  // payment methods
  paymentMethodMainDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.26,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginBottom: 25,
  },
  paymentSummaryTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.4,
    marginBottom: 15,
  },
  paymentMethodTopDiv: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 5,
    //borderWidth: 1,
    borderRadius: 10,
    //borderColor: '#00E0C5',
    marginBottom: 10,
  },
  paymentMethodBottomDiv: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 5,
    //borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
  },
  paymentMethodLeftDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlineTxt: {
    marginLeft: 20,
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  cashTxt: {
    marginLeft: 20,
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  activeService: {
    borderColor: '#00E0C5',
    borderRadius: 5,
    borderWidth: 1,
  },
  activeService1: {
    display: 'none',
  },
  paymentMethodRightDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chnageaddress: {
    //backgroundColor: 'red',
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00E0C5',
    marginBottom: 15
  },
});
