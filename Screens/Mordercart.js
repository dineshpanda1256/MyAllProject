import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  function setHandleDecrement() {
    if(quantity > 0) {
    setQuantity(quantity - 1)
    } else {
      setQuantity(0)
    }
  }
  function setHandleIncrement() {
    setQuantity(quantity + 1);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* first row */}
        <View style={styles.firstrow}>
          <View style={styles.firstrowLeftDiv}>
            <TouchableOpacity>
              <AntDesign
                name="left"
                size={20}
                color="#666"
                style={styles.leftIcon}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.medicineTxt}>Cart</Text>
            </View>
          </View>
        </View>

        {/* Added to cart div */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.AddedToCartDiv}>
            {/* left div */}
            <View style={styles.AddedToCartLeftDiv}>
              <Image source={require('../Assets/Image/Paracetamol.png')} style={{ width: 160, height: 100 }} />
            </View>
            {/* right div  */}
            <View style={styles.AddedToCartRightDiv}>
              <Text>Paracetamol 500Mg</Text>
              <View style={styles.priceDiv}>
                <Text style={styles.priceTxt}>₹ 80.00 </Text>
                <Text style={styles.originalPriceTxt}> 100 </Text>
                <Text style={styles.offerTxt}> 10% off</Text>
              </View>
              <View style={styles.quantityAddedSaveLaterDiv}>
                <View style={styles.quantityAddedDiv}>
                  <TouchableOpacity onPress={setHandleDecrement}>
                    <Entypo name="minus" size={15} color="#858585" />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.Txt1}> {quantity} </Text>
                  </View>
                  <TouchableOpacity onPress={setHandleIncrement}>
                    <Entypo name="plus" size={15} color="#009987" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveLaterTxtDiv}>
                  <Text style={styles.saveLaterTxt}>Save Later</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <DeleteIcon name="delete" size={15} color="#F5154F" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* delivery address div */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.deliveryAddressMainDiv}>
            <View style={styles.addressDiv}>
              <Text style={styles.deliverTxt}>
                Deliver to Sagarika Mohanty, Nandan Vihar,
              </Text>
              <Text style={styles.deliverTxt}>Patia, Bhubaneswar, 751024</Text>
            </View>
            <View>
              <Text style={styles.deliveryTimeTxt}>
                Deliver by 26 Feb 2022 | 10.00 PM
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddressAndPayment1')}>
              <View style={styles.changeAddressDiv}>
                <Text style={styles.changeAddressTxt}>Change Address</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* payment summary div */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.paymentSummaryMainDiv}>
            <View>
              <Text style={styles.paymentSummaryTxt}>Payment Summary</Text>
            </View>
            <View>
              <View style={styles.paymentTxtsDiv}>
                <View>
                  <Text style={styles.paymentTxts}>Total MRP</Text>
                </View>
                <View>
                  <Text style={styles.paymentTxts}>₹ 1240.00 </Text>
                </View>
              </View>
              <View style={styles.paymentTxtsDiv}>
                <View>
                  <Text style={styles.paymentTxts}>Total Discount</Text>
                </View>
                <View>
                  <Text style={styles.paymentTxts}>₹ 240.00 </Text>
                </View>
              </View>
              <View style={styles.paymentTxtsDiv}>
                <View>
                  <Text style={styles.paymentTxts}>GST</Text>
                </View>
                <View>
                  <Text style={styles.paymentTxts}>₹ 40.00 </Text>
                </View>
              </View>
              <View style={styles.paymentTxtsDiv}>
                <View>
                  <Text style={styles.paymentTxts}>Shipping Fee</Text>
                </View>
                <View>
                  <Text style={styles.freeTxt}>FREE</Text>
                </View>
              </View>
              <View style={styles.grandTotalTxtDiv}>
                <View>
                  <Text style={styles.paymentTxts}>Grand Total</Text>
                </View>
                <View>
                  <Text style={styles.paymentTxts}> ₹ 1040.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: Dimensions.get('window').height * 0.1 }}></View>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Medicine_home')}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.takeFreeTrialBtnDiv}>
            <View style={styles.takeFreeTrialBtn}>
              <Text style={styles.takeFreeTrialBtnTxt}>Checkout</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //  first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 20,
  },
  firstrowLeftDiv: {
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
  medicineTxt: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.300349,
    color: '#222B45',
  },

  // added to cart div
  AddedToCartDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.13,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
  },
  priceDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  priceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 10,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
  originalPriceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 10,
    fontWeight: '500',
    marginRight: 4,
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  offerTxt: {
    color: '#009987',
    letterSpacing: 0.3,
    fontSize: 10,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
  quantityAddedSaveLaterDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityAddedDiv: {
    // width: 50,
    // height: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  Txt1: {
    color: '#979797',
    fontWeight: '400',
    fontSize: 11,
  },
  saveLaterTxtDiv: {
    // width: 57,
    // height: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 2
  },
  saveLaterTxt: {
    fontSize: 11,
    fontWeight: '400',
    color: '#979797',
  },

  // delivery address div
  deliveryAddressMainDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.2,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginVertical: 15,
  },
  addressDiv: {
    justifyContent: 'flex-start',
    marginBottom: 13,
  },
  deliverTxt: {
    color: '#231F20',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 5,
  },
  deliveryTimeTxt: {
    color: '#231F20',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 20,
  },
  changeAddressDiv: {
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00E0C5',
  },
  changeAddressTxt: {
    color: '#00E0C5',
    fontSize: 12,
    fontWeight: '500',
  },

  // payment summary div
  paymentSummaryMainDiv: {
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.28,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginBottom: 15,
  },
  paymentSummaryTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 10,
  },
  paymentTxtsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  paymentTxts: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
  },
  freeTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#009987',
  },
  grandTotalTxtDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    marginTop: 15,
    borderTopColor: '#e1e1e1',
    borderTopWidth: 1,
  },

  Heading: {
    marginTop: 20,
    color: 'black',
    // marginLeft: 80,
  },
  div: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 20,
  },
  free: {
    color: '#009987',
    marginRight: 10,
  },
  last2: {
    marginRight: 10,
  },
  btn1: {
    color: 'white',
    alignItems: 'center',
  },
  btn2: {
    color: 'white',
    marginTop: 5,
  },
  btn: {
    marginTop: 40,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 20,
    borderColor: '#37a987',
  },
  square: {
    borderWidth: 2,
    width: Dimensions.get('window').width * 0.9,
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 10,
    // height: Dimensions.get('window').height * 0.27,
    borderColor: '#E1E1E1',
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 15,
  },
  Row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  line: {
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E1E1E1',
    width: Dimensions.get('window').width * 0.81,
  },

  payment: {
    marginLeft: 17,
    marginTop: 12,
    color: 'black',
  },

  container: {
    backgroundColor: 'white',
    height: 800,
  },
  div1: {
    borderWidth: 2,
    flexDirection: 'row',
    height: 110,
    marginTop: 25,
    marginLeft: 20,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  div2: {
    borderWidth: 2,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: 148,
    marginTop: 15,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 60,
    marginTop: 25,
    color: 'black',
  },
  img: {
    marginLeft: 12,
    marginTop: 12,
  },
  col2: {
    marginTop: 15,
    marginLeft: 30,
  },
  txt1: {
    fontSize: 12,
    color: 'black',
  },
  txt2: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  txt3: {
    marginTop: 8,
    borderWidth: 1.5,
    height: 20,
    width: 59,
    borderColor: '#E1E1E1',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 12,
  },
  clr: {
    color: '#009987',
  },
  txt4: {
    marginLeft: 8,
    marginTop: 8,
    borderWidth: 1.5,
    fontSize: 10,
    borderRadius: 5,
    borderColor: '#E1E1E1',
    height: 20,
    width: 62,
    paddingLeft: 5,
    paddingTop: 2,
  },
  text1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    color: 'black',
  },
  text2: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    color: 'black',
  },
  text3: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 12,
    color: 'black',
  },
  text4: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 12,
    color: 'black',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'cyan',
    width: 130,
    paddingVertical: 6,
    paddingHorizontal: 13,
    color: '#009987',
  },
  takeFreeTrialBtnDiv: {
    marginTop: 10,
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
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
    marginBottom: 20,
  },
  takeFreeTrialBtn: {
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

export default Screen2;
