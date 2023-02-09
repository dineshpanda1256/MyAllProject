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
import PaymentSummaryData from '../Components/AmbulanceDeliveryPaymentSummary';

export default function AmbulanceOrder4({navigation}) {
  var api = [
    {
      cost: '₹ 300.00 ',
      gst: '₹ 30.00 ',
      paidamount: '₹ 330.00 ',
    },
  ];
  return (
    <View style={styles.container}>
      {/* Arrived Txt div */}
      <View style={styles.arrivedTxtDiv}>
        <Text
          style={styles.arrivedTxt}
          onPress={() => navigation.navigate('AddressAndPayment5')}>
          Arrived
        </Text>
      </View>

      {/* payment summary div */}
      <View style={styles.paymentSummaryDivRow}>
        <View style={styles.paymentSummaryDiv}>
          <View style={styles.paymentSummaryTxtDiv}>
            <Text style={styles.paymentSummaryTxt}>Payment Summary</Text>
          </View>
          <View>
            {api.map(e => {
              return <PaymentSummaryData data={e} />;
            })}
          </View>
          <View style={styles.paymentmethodTxtDivRow}>
            <View>
              <Text style={styles.paymentmethodTxt}>Payment Method</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.payoncashTxt}>Pay On Cash</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* button */}
      <View style={{alignItems: 'center'}}>
        <LinearGradient
          colors={['#00E0C5', '#009987']}
          style={styles.takeFreeTrialBtnDiv}>
          <TouchableOpacity
            style={styles.takeFreeTrialBtn}
            onPress={() => navigation.navigate('AmbulanceOrder5')}>
            <Text style={styles.takeFreeTrialBtnTxt}>Thank You</Text>
          </TouchableOpacity>
        </LinearGradient>
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

  // arrived txt div
  arrivedTxtDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  arrivedTxt: {
    color: '#009987',
    fontSize: 24,
    fontWeight: 'bold',
  },

  // payment summary div
  paymentSummaryDivRow: {
    alignItems: 'center',
  },
  paymentSummaryDiv: {
    width: Dimensions.get('window').width * 0.88,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    marginBottom: 50,
  },
  paymentSummaryTxtDiv: {
    justifyContent: 'flex-start',
  },
  paymentSummaryTxt: {
    color: '#222222',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 15,
  },
  paymentmethodTxtDivRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#e1e1e1',
    borderTopWidth: 1,
    paddingTop: 15,
  },

  paymentmethodTxt: {
    color: '#717171',
    fontSize: 12,
    fontWeight: '500',
  },
  payoncashTxt: {
    color: '#26A69A',
    fontSize: 12,
    fontWeight: '500',
  },

  // button
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
