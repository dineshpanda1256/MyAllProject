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
        <View  style={styles.mainview}>
            <View style={styles.consultantdiv}>
              
                <View><Text style={{fontWeight:'bold',color:'black',marginVertical:15,fontSize:18}}>{props.data.name}</Text></View>
                <View><Text style={styles.nametext}>Sagarika Mohanty</Text></View>
                <View style={styles.div3}><View><Text style={styles.nametext}>Book Date: 22.03.2022</Text></View><View><Text style={styles.nametext}>Time: 18.30</Text></View></View>
              
            </View>

            <View style={styles.orderdetailsview}>
               <Text style={styles.nametext} >Order details</Text>
            </View>

            <View style={styles.paymentsummarydiv}>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><View><Text>Montec LC 500MG</Text></View><View><Text>₹ 40.00 </Text></View></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><View><Text>Paracetomal</Text></View><View><Text>₹ 1240.00 </Text></View></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>Dolo-650</Text><Text>₹ 240.00 </Text></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>Glucose-D</Text><Text>₹ 240.00 </Text></View>
            </View>


            <View style={styles.paymentsummarydiv}>
                <View><Text style={{color:'black',fontWeight:'bold'}}>Payment Summary</Text></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><View><Text>Total MRP</Text></View><View><Text>₹ 1240.00 </Text></View></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>Total Discount</Text><Text>₹ 240.00 </Text></View>
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>GST</Text><Text>₹ 240.00 </Text></View>
            </View>

            <View style={styles.gstdiv}>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text>Grand Total</Text><Text>₹ 1040.00 </Text></View>
            </View>

            <View  style={styles.paymentmethoddiv}>
            <View  style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:'black'}}>Payment Method</Text><Text>Online </Text></View>
            </View>
            
            <View style={styles.deliverydiv}>
                <Text style={styles.deliverytext}>Deliver To Sagarika Mohanty, Nandan Vihar,</Text>
                <Text style={styles.deliverytext}>Patia, Bhubaneswar, 751024</Text>
                <Text style={styles.deliverytext}>Mobile Number:9876543212</Text>
            </View>
            
        

        </View>
    );
};
export default Ordercomp


const styles = StyleSheet.create({

    mainview: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop:10,
        marginBottom:40,
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
    nametext:{
                color:'black',
                fontSize:14,
                fontWeight:'500', 
    },
    div3:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:7,
            marginBottom:18,
    },
    orderdetailsview:{
        borderBottomWidth:1,
        borderColor:'#DFDDDD',
        paddingVertical:15,
        
    },
    deliverydiv:{
                    justifyContent:'flex-start',
                    paddingTop:15,
                    paddingBottom:20,
                   
    },
    deliverytext:{
                    color:'black',
                    
    },


})