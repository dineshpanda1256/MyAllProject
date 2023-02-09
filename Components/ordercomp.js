import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconi from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Ordercomp = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainview}>
            <View style={styles.consultantdiv}>
              
                <View><Text style={{fontWeight:'bold',color:'black',fontSize:18}}>{props.data.name}</Text></View>
                <View><Text>Slot Booked: 22nd Feb 2022, Monday, 09.30AM-11.30AM</Text></View>
                <View><Text>Sag Clinc,</Text><Text>Video Conference</Text></View>
                <View><Text>Doctor : Dr. Sagarika</Text></View>
                


            </View>




            <View style={styles.paymentsummarydiv}>



                <View><Text style={{color:'black',fontWeight:'bold'}}>Payment Summary</Text></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><View><Text>Total MRP</Text></View><View><Text>₹ 1240.00 </Text></View></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>Total Discount</Text><Text>₹ 240.00 </Text></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>GST</Text><Text>₹ 240.00 </Text></View>
            </View>

            <View style={styles.gstdiv}>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>GST</Text><Text>₹ 240.00 </Text></View>
            </View>

            <View  style={styles.paymentmethoddiv}>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'black'}}>Payment Method</Text><Text>Online </Text></View>
            </View>
            
            
            <View  style={styles.appointmentdiv}>
            <View><Text style={{fontWeight:'bold',color:'black',}}>Are you Want to Cancel this appointment?</Text></View>
            
         <View style={{flexDirection:'row',marginVertical:10,}}><View style={{paddingRight:10,}}><TouchableOpacity   onPress={() => navigation.navigate('Prescription')} ><Text style={styles.yesbutton}>Yes</Text></TouchableOpacity></View><View><Text style={styles.nobutton}>NO</Text></View></View>
            </View>

        </View>
    );
};
export default Ordercomp


const styles = StyleSheet.create({

    mainview: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 40,
        marginHorizontal: 20,
        borderColor: '#DFDDDD',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingVertical: 10,
        paddingHorizontal: 20,
        

        elevation: 5,
    },
    consultantdiv:{
            justifyContent:'space-evenly',
            height:200,
            borderBottomWidth:1,
            borderColor:'#DFDDDD',
    },
    paymentsummarydiv:{
        justifyContent:'space-evenly',
        height:140,
        borderBottomWidth:1,
        borderColor:'#DFDDDD',

    },
    gstdiv:{
        justifyContent:'space-evenly',
        height:50,
        borderBottomWidth:1,
        borderColor:'#DFDDDD',
    },
    paymentmethoddiv:{
        justifyContent:'space-evenly',
        height:50,
        borderBottomWidth:1,
        borderColor:'#DFDDDD',    
    },
    appointmentdiv:{
        justifyContent:'space-evenly',
        height: Dimensions.get('window').height * 0.12,
        paddingTop:10,

       
    },
    yesbutton:{
                borderWidth:1,
                paddingHorizontal:20,
                paddingVertical:3,
                borderRadius:7,
                borderColor:'#009987',
                color:'#009987'
    },
    nobutton:{
        borderWidth:1,
        paddingHorizontal:20,
        paddingVertical:3,
        borderRadius:7,
        borderColor:'#EB4335',
        color:'#EB4335',
    },
    


})