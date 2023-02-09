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

export default function AddressAndPayment5({navigation}) {
  const [activeService, setActiveService] = React.useState('call');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* first row */}
        {/* first row */}
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
            <Text style={{fontSize: 18}}>Orders</Text>
          </View>
        </View>

        {/* 2nd row */}
        <View style={styles.secondrow}>
          <View style={styles.secondrowDiv}>
            {/* order details text */}
            <View>
              <Text style={styles.orderDetailsTxt}>Order Details</Text>
            </View>
            {/* order deatils div */}
            <View style={styles.orderDetailsDiv}>
              <View style={styles.orderDetailsLeftDiv}>
                <View style={styles.medicineNamesDiv}>
                  <Text style={styles.orderDetailsDivTxt}>Montec LC 500mg</Text>
                  <Text style={styles.orderDetailsDivTxt}>Paracetamol</Text>
                  <Text style={styles.orderDetailsDivTxt}>Dolo-650</Text>
                  <Text style={styles.orderDetailsDivTxt}>Glucose-D</Text>
                </View>
                <View style={styles.medicineQuantityDiv}>
                  <Text style={styles.orderDetailsDivTxt}>x 2</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 10</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 5</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 4</Text>
                </View>
              </View>
              <View style={styles.orderDetailsRightDiv}>
                <Text style={styles.orderDetailsDivTxt}>₹ 40.00 </Text>
                <Text style={styles.orderDetailsDivTxt}>₹ 100.00 </Text>
                <Text style={styles.orderDetailsDivTxt}>₹ 540.00 </Text>
                <Text style={styles.orderDetailsDivTxt}>₹ 450.00 </Text>
              </View>
            </View>
            {/* use coupons div */}
            <View style={styles.useCouponsDiv}>
              <View>
                <Text style={styles.useCouponsTxt}>Coupon Code ApplIed</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.applyTxt}>Remove</Text>
              </TouchableOpacity>
            </View>

            {/* payment summary div */}
            <View style={styles.paymentSummaryWholeDiv}>
              {/* payment summary txt */}
              <View>
                <Text style={styles.paymentSummaryTxt}>Payment Summary</Text>
              </View>
              <View style={styles.paymentSummaryDiv}>
                <View>
                  <Text style={styles.orderDetailsDivTxt}>Total Mrp</Text>
                  <Text style={styles.orderDetailsDivTxt}>Total Discounts</Text>
                  <Text style={styles.orderDetailsDivTxt}>GST</Text>
                  <Text style={styles.orderDetailsDivTxt}>Shipping Fee</Text>
                </View>
                <View>
                  <Text style={styles.orderDetailsDivTxt}>₹ 1240.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 240.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 40.00 </Text>
                  <Text style={styles.applyTxt}>Free </Text>
                </View>
              </View>
            </View>
            {/* grand total div */}
            <View style={styles.useCouponsDiv}>
              <View>
                <Text style={styles.orderDetailsDivTxt}>Grand Total</Text>
              </View>
              <View>
                <Text style={styles.orderDetailsDivTxt}>₹ 1040.00</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 3rd row  */}
        <View>
          <Text style={{color: '#231F20'}}>
            Deliver By 26 Feb 2022 | 10.00 PM
          </Text>
        </View>
        <View style={styles.secondrow1}>
          <TouchableOpacity
            style={styles.secondrowDiv1}
            onPress={() => navigation.navigate('AddressAndPayment6')}>
            <Text style={{color: '#00E0C5'}}>Add New Address</Text>
          </TouchableOpacity>
        </View>
        {/* button */}
        <View style={{justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <LinearGradient
                colors={['#00E0C5', '#009987']}
                style={styles.confirmBtnDiv}>
                <TouchableOpacity
                  style={styles.confirmBtn}
                  onPress={() => navigation.navigate('AmbulanceOrder2')}>
                  <Text style={styles.confirmBtnTxt}>Confirm</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View>
              <TouchableOpacity style={styles.cancelBtnDiv}>
                <View style={styles.cancelBtn}>
                  <Text style={styles.cancelBtnTxt}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
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
    marginBottom: 20,
    width: Dimensions.get('screen').width * 0.89,
    height: 50,
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
    height: 50,
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
    marginBottom: 10,
  },
  paymentSummaryTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.3,
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
  paymentMethodRightDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.6,
    backgroundColor: '#e1e1e1',
    // borderWidth: 1,
    // borderColor: '#e1e1e1',
    borderRadius: 10,
    paddingVertical: 25,
    paddingLeft: 15,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
  },
  orderDetailsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    fontFamily: 'Mulish',
  },
  orderDetailsDiv: {
    paddingVertical: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailsLeftDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  medicineNamesDiv: {
    justifyContent: 'flex-start',
    marginRight: 15,
  },
  orderDetailsDivTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
    marginBottom: 5,
  },
  useCouponsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  useCouponsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  applyTxt: {
    color: '#009987',
    fontSize: 12,
    fontWeight: '700',
    marginRight: 10,
    fontFamily: 'Mulish',
  },
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.8,
    backgroundColor: '#FEFEFE',
    // borderWidth: 1,
    // borderColor: '#e1e1e1',
    borderRadius: 10,
    paddingVertical: 25,
    paddingLeft: 15,
    paddingRight: 20,
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
  orderDetailsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    fontFamily: 'Mulish',
  },
  orderDetailsDiv: {
    paddingVertical: 20,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailsLeftDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  medicineNamesDiv: {
    justifyContent: 'flex-start',
    marginRight: 15,
  },
  orderDetailsDivTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
    marginBottom: 5,
  },
  useCouponsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  useCouponsDiv1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  useCouponsTxt1: {
    color: '#222',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFCA28',
  },
  applyTxt1: {
    color: '#FFCA28',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
    fontFamily: 'Mulish',
  },

  useCouponsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
  },
  applyTxt: {
    color: '#009987',
    fontSize: 12,
    fontWeight: '700',
    marginRight: 10,
    fontFamily: 'Mulish',
  },
  // payment summary div
  paymentSummaryWholeDiv: {
    paddingVertical: 15,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
  },
  paymentSummaryTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 15,
  },
  paymentSummaryDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  activeService1: {
    display: 'none',
  },
  // button
  confirmBtnDiv: {
    width: Dimensions.get('window').width * 0.45,
    // padding: 5,
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
  confirmBtn: {
    height: Dimensions.get('window').height * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },
  cancelBtnDiv: {
    width: Dimensions.get('window').width * 0.45,
    // padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00E0C5',
  },
  cancelBtn: {
    height: Dimensions.get('window').height * 0.065,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#000',
    // textShadowOffset: 5,
  },
  secondrow1: {
    //backgroundColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 60,
    marginTop: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00E0C5',
  },
});
