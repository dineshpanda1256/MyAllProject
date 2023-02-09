import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CircleIcon from 'react-native-vector-icons/Entypo';

const Porderdetailes = ({navigation}) => {
  const [checked, setChecked] = useState('round2');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.firstrowDiv}>
          <View>
            <AntDesign
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
              onPress={() => navigation.navigate('AllTestListScreen')}
            />
          </View>
          <View>
            <Text style={styles.patholabsTxt}>Patholabs</Text>
          </View>
        </View>

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

            <TouchableOpacity
              style={styles.samplecollection}
              onPress={() => {
                setChecked('round1');
              }}>
              <TouchableOpacity
                style={styles.silverCircle}
                onPress={() => {
                  setChecked('round1');
                }}>
                <View style={checked == 'round1' ? styles.greenCircle : ''} />
              </TouchableOpacity>
              <View style={styles.sample}>
                <Text
                  style={styles.Sample}
                  onPress={() => {
                    setChecked('round1');
                  }}>
                  Sample Collect from home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Samplecollection}
              onPress={() => {
                setChecked('round2');
              }}>
              <TouchableOpacity
                style={styles.silverCircle}
                onPress={() => {
                  setChecked('round2');
                }}>
                <View style={checked == 'round2' ? styles.greenCircle : ''} />
              </TouchableOpacity>
              <View style={styles.sample}>
                <Text
                  style={styles.Sample}
                  onPress={() => {
                    setChecked('round2');
                  }}>
                  Sample give on lab
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.Address}>
              <View>
                <Text style={styles.address}>
                  Collect From Sagarika Mohanty, Nandan
                </Text>
              </View>
              <View>
                <Text style={styles.address}>
                  Vihar, Patia, Bhubaneswar, 751024
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.Changeaddress}
              onPress={() => navigation.navigate('AddressAndPayment1')}>
              <View>
                <Text style={styles.changeaddress}>Change Address</Text>
              </View>
            </TouchableOpacity>
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
          </View>
        </View>
        {/* button */}
        <View style={styles.btnMainDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PatholabPayment')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.btnDiv}>
              <Text style={styles.btnText}>Checkout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  firstrowDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    marginLeft: 20,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },
  patholabsTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },
  silverCircle: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#009987',
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
    marginLeft: 15,
    width: Dimensions.get('window').width * 0.82,
  },
  Row2: {
    width: Dimensions.get('window').width * 0.82,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  payment: {
    marginLeft: 12,
    marginTop: 12,
    color: '#222222',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 12,
  },
  Changeaddress: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 15,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.04,
    borderRadius: 5,
    borderColor: '#009987',
  },
  changeaddress: {
    fontSize: 11,
    color: '#009987',
  },

  address: {
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 12,
    color: '#231F20',
  },
  Address: {
    marginLeft: 10,
    marginTop: 20,
  },
  sample: {
    marginHorizontal: 5,
  },
  Sample: {
    color: '#222222',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 3,
    color: '#030919',
  },
  samplecollection: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Samplecollection: {
    marginLeft: 10,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  round1: {
    borderWidth: 1.3,
    width: 15,
    height: 15,
    borderRadius: 40,
    marginTop: 3,
    borderColor: '#E1E1E1',
  },
  round2: {
    borderWidth: 1.3,
    width: 15,
    height: 15,
    borderRadius: 40,
    marginTop: 3,
    borderColor: '#E1E1E1',
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
    marginVertical: 15,
    paddingBottom: 20,
    width: Dimensions.get('window').width * 0.92,
    // height: Dimensions.get('window').height * 0.75,
    borderWidth: 1.3,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  Orders: {
    fontSize: 19,
    color: '#000000',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#FFFEFF',
    flex: 1,
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

  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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

export default Porderdetailes;
