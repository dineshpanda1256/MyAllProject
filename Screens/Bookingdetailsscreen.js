import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React from 'react';
  import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
  import { useNavigation } from '@react-navigation/native';
  import LinearGradient from 'react-native-linear-gradient';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  const { height, width } = Dimensions.get('screen');
  export default function Bookingdetailscreen() {
    const navigation = useNavigation();
    //data for map
    const MedicinPriceData = [
      {
        bouns: 'TotalMRP',
        price: '₹1240.00',
      },
      {
        bouns: 'TotalDiscount',
        price: '₹240.00',
      },
      {
        bouns: 'GST',
        price: '₹40.00',
      },
      {
        bouns: 'ShippingFee',
        price: 'FREE',
      },
    ];
  
    return (
      <View style={styles.orderContainer}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EFF3FA',
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="chevron-back-outline" color="#626262" size={25} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 8 }}></Text>
          </View>
          {/* start order details*/}
          <ScrollView>
            <View style={styles.cardOrderInnerContainer}>
              <View style={styles.textInputContainer}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Mulish',
                    lineHeight: 15.06,
                    letterSpacing: 0.2,
                    textTransform: 'capitalize',
                    color: '#222222',
                    marginLeft: 4,
                    fontWeight: '600'
                  }}>
                  Appointment detailes
                </Text>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              <View style={styles.TextInputContainer}>
                <Text style={{ fontSize: 10, fontFamily: 'Mulish', color: '#222' }}>
                  SAGARIKA MOHANTY (F - 37)
                </Text>
                <Text style={{ fontSize: 10, fontFamily: 'Mulish', marginTop: 20 }}>
                  sagarika@gmail.com
                </Text>
                <Text
                  style={{ fontSize: 10, fontFamily: 'Mulish', marginVertical: 5 }}>
                  7894562371
                </Text>
              </View>
              <View style={styles.TextInputContainer}>
                <Text style={{ fontSize: 12, fontFamily: 'Mulish', color: '#222' }}>
                  Address : Nandan Vihar, Patia, Bhubaneswar, 751024
                </Text>
                <Text style={{ fontSize: 12, color: '#222' }}>
                  Time : 26 Feb 2022 | 10.00 - 11.00 PM
                </Text>
  
                
  
              </View>
              {/* map start */}
              {/* map end */}
              {/* coupn start */}
              <View>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              {/* coupn end */}
              <View style={{ marginTop: -40, marginBottom: 10, marginLeft: 4 }}>
                <Text style={styles.paymentInnerText}>Payment Summary</Text>
              </View>
              {/* map start */}
              <View>
                {MedicinPriceData.map((list, index) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      key={index}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 7,
                          marginLeft: 4,
                          marginHorizontal: -20,
                          width: '70%',
                        }}>
                        <Text
                          style={[
                            styles.textField,
                            {
                              color: '#717171',
                            },
                          ]}>
                          {list.bouns}
                        </Text>
                        <View style={{ width: '25%' }}>
                          <Text
                            style={[
                              styles.textField,
                              { color: list.price == 'FREE' ? '#00E0C5' : '#717171' },
                            ]}>
                            {list.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={[styles.textInputContainer, { marginTop: -40 }]}>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid={'transparent'}
                />
              </View>
              <View style={styles.textInputContainer3}>
                <Text style={styles.couponText}>Grand Total</Text>
                <Text style={[styles.couponText, { color: '#717171', marginRight: 10 }]}>₹ 1040.00</Text>
              </View>
            </View>
            <View style={styles.cardOrderInnerContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                }}>
                <View>
                  <Image
                    source={require('../Assets/Image/3.png')}
                    style={{ borderRadius: 45, height: 90, width: 90 }}
                  />
                </View>
                <View style={{ marginHorizontal: 30 }}>
                  <Text
                    style={{
                      color: '#222',
                      fontSize: 20,
                      marginBottom: 5,
                    }}>
                    Dr. Klimisch J
                  </Text>
                  <Text style={{ fontSize: 12 }}>Surgeon</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 10,
                      alignItems: 'center',
                    }}>
  
                    <Text style={{ fontSize: 10 }}> ⭐️ 4.5 (135 reviews)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{height:Dimensions.get("screen").height*0.1}}></View>
            {/* button */}
            <View style={styles.btnMainDiv}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BottomNavigator')}>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.btnDiv}>
                  <Text style={styles.btnText}>Thank you</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* end order details */}
        </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    orderContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardOrderInnerContainer: {
      backgroundColor: 'white',
      paddingHorizontal: 5,
      borderRadius: 10,
      marginHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 5,
  
      //width: width / 2.3,
      //alignItems: "center",
      //justifyContent: "center",
      //
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    TextInputContainer: {
      //flexDirection: "row",
      //alignItems: "center",
      borderBottomColor: '#DFDDDD',
      borderBottomWidth: 0.9,
      marginVertical: 7,
      marginHorizontal: 10,
    },
  
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: '#DFDDDD',
      borderBottomWidth: 0.9,
      marginVertical: 7,
      marginHorizontal: 10,
    },
    textInputContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#DFDDDD',
      borderTopColor: '#DFDDDD',
      borderBottomWidth: 0.9,
      borderTopWidth: 0.9,
      marginTop: 1,
      marginHorizontal: 10,
      paddingVertical: 20,
    },
    textInputContainer3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -10,
      marginHorizontal: 5,
      paddingVertical: 20,
    },
  
    textInputField: {
      flex: 1,
      // flexDirection: "row",
      // justifyContent: "space-between",
      // alignItems: "center",
      // marginVertical: 10,
      // marginHorizontal: 15,
    },
    textField: {
      fontSize: 12,
      fontFamily: 'Mulish',
      lineHeight: 15.06,
      letterSpacing: 0.4,
      fontWeight: '600',
    },
    couponText: {
      fontSize: 12,
      fontFamily: 'Mulish',
      lineHeight: 15.06,
      letterSpacing: 0.2,
      marginLeft: 8,
      fontWeight: '400',
    },
    paymentText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
      marginLeft: 10,
    },
    paymentInnerText: {
      fontSize: 12,
      fontFamily: 'Mulish',
      lineHeight: 15.06,
      letterSpacing: 0.2,
      color: '#222222',
      marginLeft: 8,
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
    chnageaddress: {
      //backgroundColor: 'red',
      width: Dimensions.get('screen').width * 0.35,
      height: Dimensions.get('screen').height * 0.05,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#00E0C5',
      marginBottom: 15
    },
  });
  