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
import {useNavigation} from '@react-navigation/native';

export default function AddressAndPaymentComponent() {
  const navigation = useNavigation();
  return (
    <View>
      {/* first row */}
      <View style={styles.firstrow}>
        <View>
          <AntDesign
            name="left"
            size={20}
            color="#666"
            style={styles.leftIcon}
            onPress={() => navigation.navigate('AddressAndPayment2')}
          />
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
              <Text style={styles.useCouponsTxt}>Use Coupons</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CoupnsField');
              }}>
              <Text style={styles.applyTxt}>Apply</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  // first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },
  secondrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.7,
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
});
