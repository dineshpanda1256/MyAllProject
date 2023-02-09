import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Billcomp2 from './billcompinside';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Billcomp = (props) => {
    const navigation = useNavigation();

    var mpi =[
        {
            med1: 'Montec LC 200MG',
            quantity:'x2',
            price:'40.00'
        },
        {
            med1: 'Paracetamal',
            quantity:'x10',
            price:'100.00'
        },
        {
            med1: 'Dolo-650',
            quantity:'x5',
            price:'540.00'
        },
        {
            med1: 'Glucon-D',
            quantity:'x4',
            price:'450.00'
        },
      
       
    ]
    return (

        <View style={styles.assdiv}>
            <View style={styles.orderdetailsdiv}>

                <View style={styles.orderdiv}>
                <View style={{paddingBottom:5,}}><Text>Order detailes</Text></View>
                </View>

                {/* <View style={styles.medicinediv}>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>{props.data.medicine}</Text><Text>x2</Text><Text>40.00</Text></View>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View>


                </View> */}
                <View style={styles.medicinediv}>

{
     mpi.map((dinesh2)=> {
         return(
             <Billcomp2 data={dinesh2}/>
            
         )
     }) 
  } 
                </View>


                <View style={styles.coupondiv}>

                <View style={styles.coupontext}><Text style={{color:'black',fontWeight:'600',fontSize:14}}>Coupon Code Applied</Text><Text style={{color:'#02C5AD',fontWeight:'600',fontSize:14}}>Remove</Text></View>
                <View style={styles.coupontext}><Text style={{color:'#FFCA28',fontWeight:'600'}}>Ckare123</Text><Text style={{color:'#FFCA28',fontWeight:'600'}}>-450</Text></View>

                </View>

                <View style={styles.paymentdiv}>
                        <View><Text style={{ marginTop:5,marginBottom: 15,color:'black',fontWeight:'600',fontSize:14}}>Payment Summary</Text></View>
                        <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Total MRP</Text><Text>1240.00</Text></View>
                        <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Total Discount</Text><Text>40.00</Text></View>
                        <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>GST</Text></View>
                        <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Shipping Fee</Text><Text>FREE</Text></View>

                </View>

                <View style={styles.granddiv}>
                <View style={styles.grandtext}><Text>Grand Total</Text><Text>1040.00</Text></View>

                </View>

                <View style={styles.paymentstatusdiv}>
                        <View style={styles.paymenttext}><Text style={{ marginBottom: 5,color:'black',fontWeight:'600',fontSize:14}}>Payment Status</Text><Text>Paid</Text></View>
                </View>
            </View>

        </View>


    );
};
export default Billcomp


const styles = StyleSheet.create({

    assdiv: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
        
    },
    orderdetailsdiv: {
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom:5,
        // borderColor:'gray',
       
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.65,
        paddingHorizontal: 15,
        borderColor:'#DFDDDD',
        backgroundColor:'#ffffff',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
   
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
paddingVertical:20,
paddingHorizontal:20,

elevation: 5,
       
    },
    medicinediv: {
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
        paddingVertical:15,


    },
    medicinetext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    coupondiv:{
                    justifyContent:'space-evenly',
                    paddingVertical:10,
                    borderBottomWidth:1,
                    borderColor: '#DFDDDD',
    },
    coupontext:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    marginBottom:8,
    },
    paymentdiv:{
                    justifyContent:'space-evenly',
                    paddingVertical:10,
                    borderBottomWidth:1,
                    borderColor:'#DFDDDD',
    },
    granddiv:{
            justifyContent:'space-evenly',
            paddingTop:15,
            paddingBottom:10,
            borderBottomWidth:1,
            borderColor:'#DFDDDD',
            
    },
    grandtext:{
                justifyContent:'space-between',
                flexDirection:'row',
                
    },
    paymentstatusdiv:{
        justifyContent:'space-evenly',  
       paddingTop:5,   
    },
    paymenttext:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    marginTop:8,
                    marginBottom:15,
    },
    orderdiv:{
        borderBottomWidth: 1,
        paddingVertical:5,
        borderColor:'#DFDDDD',
       marginTop:-10,
       
            
    },

})