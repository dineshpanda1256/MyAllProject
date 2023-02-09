import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Button,
    Modal,
    PermissionsAndroid,
    ActivityIndicator,
  } from 'react-native';
  import React from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
  import {useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';

  const {height, width} = Dimensions.get('screen');
  
  export default function Ifcutsinthemiddle() {
    const navigation = useNavigation();
  
   
  
    return (
      <View style={styles.mainContainer}>
        <ScrollView  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
          <View style={styles.firstMainDiv}>
            <View style={styles.firstwhiteDiv}>
              <View style={styles.backIconView}>
                <TouchableOpacity
                  style={styles.clickBackIcon}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Ionicons
                    name="chevron-back-outline"
                    color={'black'}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.firstMainDiv}>
                <LinearGradient
                  colors={['#00E0C5', '#009987']}
                  style={styles.letterBackground}>
                  <Text
                    style={{fontSize: 30, color: '#ffffff', fontWeight: '700'}}>
                    S
                  </Text>
                </LinearGradient>
                <View style={{marginBottom: 10}}>
                  <Text style={{fontSize: 20, fontFamily: 'Mulish'}}>
                    Sagarika Mohanty
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 14, color: '#009987'}}>
                    23 Years old{' '}
                  </Text>
                </View>
              </View>
  
              {/* ribbon start */}
              <View style={styles.CardContainer}>
                <View style={styles.pview}>
                  <Text style={{fontSize: 16,color:'black',}}>Prescriptions</Text>
                </View>
                <TouchableOpacity
                  style={styles.detailsCardContainer}
                  onPress={() => pickAFile()}>
                  <Ionicons name="document-outline" color="#7ACEFA" size={30} />
                </TouchableOpacity>
              </View>
              {/* {ribbon end} */}
            </View>
          </View>
          <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
  
          <View>
            <View style={{marginHorizontal: 15, marginBottom:5}}>
              <Text style={{fontSize: 18,color:'black'}}>Patient Health Problem</Text>
            </View>
            <View style={{marginHorizontal: 15, marginVertical: 2}}>
              <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                consectetur ante turpis, a sodales dolor rutrum ut. Mauris sed
                lectus a nunc dictum cursus. Praesent aliquam leo sit amet elit.
              </Text>
            </View>
            <View style={{marginHorizontal: 15, marginVertical: 5}}>
              <Text style={{fontSize: 18,color:'black', letterSpacing: 0.4}}>Timing</Text>
            </View>
            <View style={{marginHorizontal: 15}}>
              <Text style={{fontSize: 14, letterSpacing: 0.23, lineHeight: 20}}>
                22 March , Tuesday at (08:30 AM - 09:00 PM){' '}
              </Text>
            </View>

                    {/* collect div  */}
                    <View style={styles.collectviewassume}>

                        <View style={styles.collectinside}>
                            <View style={styles.iconview}><Image style={styles.vectoricon} source={require('../Assests/Vector.png')}/></View>
                            <View><Text style={styles.collectext}>Collect Sample From Home</Text></View>

                        </View>
                    </View>

                                    {/* address view  */}
                    <View style={styles.collectviewassume}>
                        <View style={styles.addview2}>
                        <View style={styles.addressinside}>
                            <Text style={{fontSize:18,color:'black',fontWeight:'800',marginBottom:15}}>Address</Text>

                            <View style={styles.addview}>
                            <View><Text style={{fontSize:14,color:'black'}}>Partia, bhubneswer - 751024</Text></View>
                            <View><Text style={{fontSize:14,color:'#009987'}}>Get direction</Text></View>
                            </View>
                        </View>
                        </View>
                    </View>

                                    {/* address view end  */}



            <View style={{height: Dimensions.get('screen').height * 0.02}}></View>
          </View>
          <View style={styles.btnMainDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profilescreen')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.btnDiv}>
              <Text style={styles.btnText}>Sample Collected</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    clickBackIcon: {
      height: 40,
      width: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    firstMainDiv: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    firstwhiteDiv: {
      height: Dimensions.get('screen').height * 0.48,
      width: Dimensions.get('screen').width*1,
      backgroundColor: '#F8F8F8',
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
      paddingVertical: 20,
      paddingHorizontal: 15,
    },
    letterBackground: {
      marginVertical: 20,
      borderRadius: 35,
      width: 70,
      height: 70,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 5,
      elevation: 10,
    },
    inputBoxContainer: {
      width: Dimensions.get('window').width * 0.91,
      marginHorizontal: 15,
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 1,
      borderWidth: 1,
      borderColor: '#e1e1e1',
      borderRadius: 5,
    },
    previewbtndiv: {
      width: 340,
      padding: 5,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.39,
      shadowRadius: 1.41,
      elevation: 2,
    },
    previewbtn: {
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconsRighesidediv: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      margin: 5,
    },
    servicesIconContainer: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 10,
      backgroundColor: '#7ACEFA26',
      borderColor: '#7ACEFA',
    },
    activeService: {
      borderColor: '#00E0C5',
      borderRadius: 5,
      borderWidth: 1,
    },
    iconsRigheside: {
      width: 25,
      height: 25,
      borderColor: '#000000',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      borderWidth: 0.1,
    },
    CardContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      marginVertical:46,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 30,
    },
    detailsCardContainer: {
      backgroundColor: '#7ACEFA26',
      height: 70,
      width: 49,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      paddingVertical: 2,
    },
    //modal
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: Dimensions.get('window').width * 0.8,
      height: Dimensions.get('window').height * 0.45,
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
      marginHorizontal: 5,
      marginVertical: 10,
      borderWidth: 0.5,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderColor: '#00E0C5',
    },
    timeTxt: {
      fontSize: 18,
      marginVertical: 30,
      fontFamily: 'Mulish',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    pview:{
            height:20,
    },
    collectviewassume:{
            justifyContent:'center',
            alignItems:'center',
    },
    collectinside:{
            width:Dimensions.get('screen').width*0.98,
            marginTop:20,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
            paddingLeft:10,
    },
    iconview:{
                width:55,
                height:55,
                backgroundColor:'#F7E7CE',
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                marginRight:20,

    },
    vectoricon:{
                    width:20,
                    height:25,
    },
    collectext:{
            fontSize:16,
            color:'black',
    },
    addview:{
            flexDirection:'row',
            justifyContent:'space-between',

    },
    addview2:{
        width:Dimensions.get('screen').width*0.90,
        marginTop:20,
    },
    btnMainDiv: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 20,
    },
    btnDiv: {
      width: Dimensions.get('screen').width * 0.8,
      height:50,
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