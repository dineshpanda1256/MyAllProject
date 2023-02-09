import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapIcon from 'react-native-vector-icons/FontAwesome5';

const POrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* First Row */}
        <View style={styles.firstrow}>
          <View style={styles.firstrowLeftDiv}>
            <View>
              <AntDesign
                name="left"
                size={20}
                color="#666"
                style={styles.leftIcon}
                onPress={() => navigation.navigate('PatholabPayment')}
              />
            </View>
            <View>
              <Text style={styles.medicineTxt}>Orders</Text>
            </View>
          </View>
        </View>

        {/* second row */}
        <View>
          <Text style={styles.orderIdTxt}>Order id : Ckare12345</Text>
        </View>

        {/* third Div */}
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <View style={styles.Box}>
            <View>
              <Text style={styles.orderDetails}>Order detailes</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.line}>
                <Text></Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <View style={styles.Medicineprice}>
                <View>
                  <Text style={styles.medicine}>Complete Blood Count</Text>
                </View>
                <View>
                  <Text style={styles.price}>₹ 40.00</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.Medicineprice}>
                <View>
                  <Text style={styles.medicine}>TSH</Text>
                </View>
                <View>
                  <Text style={styles.price}>₹ 100.00</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.Medicineprice}>
                <View>
                  <Text style={styles.medicine}>Liver Function Test</Text>
                </View>
                <View>
                  <Text style={styles.price}>₹ 540.00</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.Medicineprice}>
                <View>
                  <Text style={styles.medicine}>Thyphoid Test</Text>
                </View>
                <View>
                  <Text style={styles.price}>₹ 450.00</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.Line}>
                <Text></Text>
              </View>
            </View>

            <View style={styles.square}>
              <View>
                <Text style={styles.payment}>Payment Summary</Text>
              </View>
              <View style={styles.div3}>
                <View style={styles.Row1}>
                  <Text style={styles.last1}>Total MRP</Text>
                  <Text style={styles.last2}>₹1240.00</Text>
                </View>
                <View style={styles.Row2}>
                  <Text style={styles.last1}>Total Discount</Text>
                  <Text style={styles.last2}>₹240.00</Text>
                </View>
                <View style={styles.Row2}>
                  <Text style={styles.last1}>GST</Text>
                  <Text style={styles.last2}>₹40.00</Text>
                </View>
                <View style={styles.Row2}>
                  <Text style={styles.last1}>Shipping Fee</Text>
                  <Text style={styles.free}>Free</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.line}></Text>
              </View>
              <View style={styles.Row2}>
                <Text style={styles.Grand}>Grand Total</Text>
                <Text style={styles.Total}>₹1040.00</Text>
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.line}></Text>
            </View>

            <View style={styles.square}>
              <View>
                <Text style={styles.payment}>Booking Details</Text>
              </View>
              <View style={styles.div3}>
                <View style={styles.Row1}>
                  <Text style={styles.last1}>Mode</Text>
                  <Text style={styles.last2}>Home collection</Text>
                </View>
                <View style={styles.Row2}>
                  <Text style={styles.last1}>Date</Text>
                  <Text style={styles.last2}>12.09.2022</Text>
                </View>
                <View style={styles.Row2}>
                  <Text style={styles.last1}>Time</Text>
                  <Text style={styles.last2}>5.00pm - 6.00pm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{alignItems: 'flex-end', paddingRight: 20}}
          onPress={() => navigation.navigate('POrder1')}>
          <Text style={styles.needHelpTxt}>Need Help?</Text>
        </TouchableOpacity>

        {/* button */}
        <View style={styles.btnMainDiv}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.btnDiv}>
              <Text style={styles.btnText}>Thank You</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  firstrowLeftDiv: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginHorizontal: 15,
    // marginVertical: 15,
    borderRadius: 30,
    width: 40,
    height: 40,
  },
  medicineTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },
  orderIdTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222222',
    marginLeft: 15,
    marginTop: 10,
  },
  last1: {
    color: '#717171',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 3,
  },
  last2: {
    color: '#717171',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
  },
  Grand: {
    color: '#717171',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 10,
  },
  Total: {
    color: '#717171',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 10,
  },
  free: {
    color: '#009987',
    marginRight: 10,
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    width: Dimensions.get('window').width * 0.82,
  },
  Row2: {
    width: Dimensions.get('window').width * 0.82,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginBottom: 5,
  },
  payment: {
    marginLeft: 12,
    marginTop: 12,
    color: '#222222',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 12,
  },
  medicine: {
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    color: '#717171',
    marginTop: 5,
  },
  price: {
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    color: '#717171',
    marginTop: 5,
  },
  Box: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.92,
    // height: Dimensions.get('window').height * 0.7,
    borderWidth: 1.3,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  Orders: {
    fontSize: 19,
    color: '#000000',
    marginTop: 10,
  },
  Heading: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  orderDetails: {
    fontSize: 12,
    color: '#222222',
    fontWeight: '600',
    fontFamily: 'Mulish',
    marginTop: 15,
    marginLeft: 10,
  },
  line: {
    borderBottomWidth: 0.8,
    width: Dimensions.get('window').width * 0.85,
    borderBottomColor: '#e1e1e1',
  },
  Line: {
    borderBottomWidth: 0.8,
    width: Dimensions.get('window').width * 0.85,
    borderBottomColor: '#E1E1E1',
  },
  Medicineprice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.85,
  },
  needHelpTxt: {
    fontSize: 12,
    color: '#009987',
    fontWeight: '600',
    fontFamily: 'Mulish',
    marginBottom: 30,
  },
  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default POrder;
