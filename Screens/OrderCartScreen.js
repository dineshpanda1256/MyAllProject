import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Modal,
} from 'react-native';
// import SearchBar from '../Components/SearchBar';
// import Cart_Component from '../Components/CartComponent';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckCircleIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WalletIcon from 'react-native-vector-icons/AntDesign';
import CloseCircleIcon from 'react-native-vector-icons/AntDesign';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function OrderCart() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [quantity, setQuantity] = useState(1);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* first row */}
        <View style={styles.firstrow}>
          <View style={styles.firstrowLeftDiv}>
            <TouchableOpacity>
              <LeftIcon
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

        {/* payment method div */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.paymentMethodMainDiv}>
            <View>
              <Text style={styles.paymentSummaryTxt}>Payment Method</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.paymentMethodTopDiv,
                paymentMethod == 'online'
                  ? { borderColor: '#00E0C5' }
                  : { borderColor: '#e1e1e1' },
              ]}
              onPress={() => setPaymentMethod('online')}>
              <View style={styles.paymentMethodLeftDiv}>
                <View>
                  <WalletIcon name="wallet" size={15} color="#3E64FF" />
                </View>
                <View>
                  <Text style={styles.onlineTxt}>Online</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRightDiv]}>
                <CheckCircleIcon
                  name="checkcircle"
                  size={15}
                  color="#09960E"
                  style={
                    paymentMethod == 'online'
                      ? { display: 'flex' }
                      : { display: 'none' }
                  }
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentMethodBottomDiv,
                paymentMethod == 'cash'
                  ? { borderColor: '#00E0C5' }
                  : { borderColor: '#e1e1e1' },
              ]}
              onPress={() => setPaymentMethod('cash')}>
              <View style={styles.paymentMethodLeftDiv}>
                <View>
                  <MaterialCommunityIcons
                    name="cash"
                    size={20}
                    color="#09960E"
                  />
                </View>
                <View>
                  <Text style={styles.onlineTxt}>Cash</Text>
                </View>
              </View>
              <View style={[styles.paymentMethodRightDiv]}>
                <CheckCircleIcon
                  name="checkcircle"
                  size={15}
                  color="#09960E"
                  style={
                    paymentMethod == 'cash'
                      ? { display: 'flex' }
                      : { display: 'none' }
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => setModalVisible(true)}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={styles.proceedToPayBtnDiv}>
            <TouchableOpacity
              style={styles.proceedToPayBtn}
              onPress={() =>
                setModalVisible(true)
              }>
              <Text style={styles.proceedToPayBtnTxt}>Proceed To Pay</Text>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>

        {/* Popup / Modal */}
        <View>
          <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View
              style={[
                styles.centeredView,
                {
                  backgroundColor: '#000000aa',
                  height: Dimensions.get('window').height,
                },
              ]}>
              <View style={styles.modalView}>
                <View>
                  <View style={styles.row1}>
                    <CloseCircleIcon
                      name="closecircle"
                      size={25}
                      color="black"
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                  </View>
                  <View style={styles.row2}>
                    <View style={styles.profileImgDiv}>
                      <Image
                        source={require('../Assets/Image/profileImg.png')}
                      />
                    </View>
                  </View>
                  <View style={styles.row3}>
                    <Text style={styles.profileNameTxt}>Sagarika Mohanty</Text>
                  </View>
                  <View style={styles.row4}>
                    <View style={styles.progressbarDiv}>
                      <View style={styles.progressbar}>
                        <Text style={styles.percentageTxt}>85%</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row5}>
                    <Text style={styles.profileCompleteTxt}>
                      OOPS! You profile is not completed yet,
                    </Text>
                    <Text style={styles.profileCompleteTxt}>
                      Please Complete your profile.
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.row6}>
                    <Text
                      style={styles.gotoProfileTxt}
                      onPress={() => navigation.navigate('Medicine_home')}>
                      Go to Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  //  first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
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
    width: Dimensions.get('window').width * 0.85,
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
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.2,
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
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.28,
    paddingTop: 20,
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

  // payment methods
  paymentMethodMainDiv: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.2,
    paddingTop: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginBottom: 15,
  },
  paymentMethodTopDiv: {
    width: Dimensions.get('screen').width * 0.75,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentMethodBottomDiv: {
    width: Dimensions.get('screen').width * 0.75,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
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

  // button
  proceedToPayBtnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    marginBottom: 10,
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
  proceedToPayBtn: {
    // height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedToPayBtnTxt: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
    color: '#fff',
    // textShadowOffset: 5,
  },

  // modal view (pop up)
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: Dimensions.get('window').width * 0.8,
    // height: Dimensions.get('window').height * 0.5,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row1: {
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'flex-end',
  },
  row2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImgDiv: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  row3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileNameTxt: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  row4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  progressbarDiv: {
    width: 185,
    height: 12,
    borderWidth: 1,
    borderColor: '#00E0C5',
    borderRadius: 10,
  },
  progressbar: {
    width: 134,
    backgroundColor: '#00E0C5',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  percentageTxt: {
    color: '#000',
    fontSize: 8,
    fontWeight: '600',
  },
  row5: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  profileCompleteTxt: {
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
  row6: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gotoProfileTxt: {
    color: '#009987',
    fontSize: 10,
    fontWeight: '700',
  },
});
