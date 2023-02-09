import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EditIcon from 'react-native-vector-icons/MaterialIcons';

const Mrnmedicinelist = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('screen').height * 0.06}}></View>
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
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View>
              <Text style={styles.selectAddressTxt}>Medicine list</Text>
            </View>
          </View>
        </View>
        {/* first row */}
        {/* second row Start */}
        <View style={styles.secondrow}>
          <View style={styles.secondrowDiv}>
            <View>
              <Text style={styles.orderDetailsTxt}>Order Details</Text>
            </View>
            <View style={styles.orderDetailsDiv}>
              <View style={styles.orderDetailsLeftDiv}>
                <View style={styles.medicineNamesDiv}>
                  <Text style={styles.orderDetailsDivTxt}>Montec LC 500mg</Text>
                  <Text style={styles.orderDetailsDivTxt}>Paracetamol</Text>
                  <Text style={styles.orderDetailsDivTxt}>Dolo-650</Text>
                  <Text style={styles.orderDetailsDivTxt}>Glucose-D</Text>
                  <Text style={styles.orderDetailsDivTxt}>Montec LC 500mg</Text>
                </View>
                <View style={styles.medicineQuantityDiv}>
                  <Text style={styles.orderDetailsDivTxt}>x 2</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 10</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 5</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 4</Text>
                  <Text style={styles.orderDetailsDivTxt}>x 7</Text>
                </View>
                <View style={styles.medicineQuantityDiv}>
                  <Text style={styles.orderDetailsDivTxt}>₹ 40.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 100.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 540.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 450.00 </Text>
                  <Text style={styles.orderDetailsDivTxt}>₹ 450.00 </Text>
                </View>
              </View>
              <View style={styles.orderDetailsRightDiv}>
                <View style={styles.medicineQuantityDiv1}>
                  <EditIcon name="edit" color={'#01B8A1'} />
                </View>
                <View style={styles.medicineQuantityDiv1}>
                  <EditIcon name="edit" color={'#01B8A1'} />
                </View>

                <View style={styles.medicineQuantityDiv1}>
                  <EditIcon name="edit" color={'#01B8A1'} />
                </View>
                <View style={styles.medicineQuantityDiv1}>
                  <EditIcon name="edit" color={'#01B8A1'} />
                </View>

                <View style={styles.medicineQuantityDiv1}>
                  <EditIcon name="edit" color={'#01B8A1'} />
                </View>
              </View>
              <View style={styles.orderDetailsRightDiv}>
                <View style={styles.medicineQuantityDiv1}>
                  <Ionicons name="trash" color={'#01B8A1'} />
                </View>
                <View style={styles.medicineQuantityDiv1}>
                  <Ionicons name="trash" color={'#01B8A1'} />
                </View>

                <View style={styles.medicineQuantityDiv1}>
                  <Ionicons name="trash" color={'#01B8A1'} />
                </View>

                <View style={styles.medicineQuantityDiv1}>
                  <Ionicons name="trash" color={'#01B8A1'} />
                </View>
                <View style={styles.medicineQuantityDiv1}>
                  <Ionicons name="trash" color={'#01B8A1'} />
                </View>
              </View>
            </View>
            {/* second row end */}
          </View>
        </View>
        <View style={styles.secondrow1}>
          <View style={styles.secondrowDiv1}>
            <View style={{marginRight: 10}}>
              <Text style={{color: '#222222'}}>Note:</Text>
            </View>
            <View style={{marginRight: 1}}>
              <Text style={{fontSize: 12, lineHeight: 20, letterSpacing: 0.02}}>
                Due to some technical issue we are unable to read all the
                medicine. Please click on send requset button our pratner will
                confirm you all the medicine Avalability
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.08}}></View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{alignItems: 'center'}}>
          <LinearGradient
            colors={['#00E0C5', '#009987']}
            style={{
              width: Dimensions.get('screen').width * 0.85,
              height: Dimensions.get('screen').height * 0.06,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 40,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Mrnmedicinelist', {});
              }}
              style={styles.btn}>
              <Text style={{color: '#ffff', fontSize: 18}}>Send a request</Text>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>
        {/* modal start */}
        {/* modal */}

        <View>
          <Modal
            transparent={true}
            visible={modalVisible}
            onPress={() => {
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
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 20,
                    }}>
                    <Text style={{fontSize: 14, color: '#000'}}>
                      After confirmation of our partner we notify you
                    </Text>
                  </View>
                  <LinearGradient
                    colors={['#00E0C5', '#009987']}
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      marginVertical: 20,
                      borderRadius: 25,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('AddressAndPayment5', {});
                      }}
                      style={styles.btn}>
                      <Text style={{color: '#ffff', fontSize: 18}}>
                        Thank You
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* modal end */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingHorizontal: 30,
  },

  // first row
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginHorizontal: 20,
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
    lineHeight: 22.08,
    letterSpacing: 0.3,
    color: '#222B45',
  },
  secondrow: {
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  secondrowDiv: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#FEFEFE',
    // borderWidth: 1,
    // borderColor: '#e1e1e1',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    //paddingLeft: 15,
    //paddingRight: 20,
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
  secondrow1: {
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  secondrowDiv1: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
    backgroundColor: '#FEFEFE',
    // borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
    paddingVertical: 25,
    paddingLeft: 25,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    //marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },

  orderDetailsTxt: {
    color: '#222',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3,
    fontFamily: 'Mulish',
  },
  orderDetailsDiv: {
    paddingVertical: 30,
    marginVertical: 10,
    //borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  orderDetailsLeftDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //    backgroundColor: 'red',
  },
  medicineNamesDiv: {
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  medicineQuantityDiv: {
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  orderDetailsDivTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: '#717171',
    marginBottom: 20,
    //backgroundColor: 'yellow',
  },
  medicineQuantityDiv1: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 3,
    borderColor: '#000000',
    borderColor: '#E5E5E5',
    //backgroundColor: 'red',
    marginBottom: 15,
  },
  modalView: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    //alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputBoxContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    // marginVertical: 5,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#000',
  },
  timeTxt: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  AddToCartDiv: {
    width: Dimensions.get('window').width * 0.73,
    height: Dimensions.get('window').height * 0.24,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e1e1e1',
  },
  textInput: {
    height: 35,
    fontSize: 12,
  },
  textInputContainer: {
    //flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomColor: '#000',
    borderBottomWidth: 0.3,
    //marginVertical: 5,
    marginHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mrnmedicinelist;
