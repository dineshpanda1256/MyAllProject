import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Billcomp2 from './billcompinside';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Orderidcomp = (props) => {
    var mpi = [
        {
            med1: 'Montec LC 200MG',
            quantity: 'x2',
            price: '40.00'
        },
        {
            med1: 'Paracetamal',
            quantity: 'x10',
            price: '100.00'
        },
        {
            med1: 'Dolo-650',
            quantity: 'x5',
            price: '540.00'
        },
        {
            med1: 'Glucon-D',
            quantity: 'x4',
            price: '450.00'
        },


    ]
    return (

        <View style={styles.mainview}>
            <View style={styles.consultantdiv}>

                <View style={styles.details}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>{props.data.name}</Text></View>
                <View style={styles.medicinediv}>

                    {
                        mpi.map((dinesh2) => {
                            return (
                                <Billcomp2 data={dinesh2} />

                            )
                        })
                    }
                </View>


            </View>

            <View style={styles.trackdiv}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}><View><Text>Coupon Code Applied</Text></View><View><Text style={{ color: '#009987' }}>Remove</Text></View></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}><View><Text style={{ color: '#C0C242', fontSize: 20 }}>Ckare123</Text></View><View><Text style={{ color: '#C0C242', fontSize: 20 }}>₹ 450.00 </Text></View></View>
            </View>








            <View style={styles.paymentsummarydiv}>


                <View><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Payment Summary</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><View><Text >Total MRP</Text></View><View><Text>₹ 1240.00 </Text></View></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text>Total Discount</Text><Text>₹ 240.00 </Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text>GST</Text><Text>₹ 240.00 </Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text>Shipping Fee </Text><Text style={{ color: '#009987', paddingRight: 20, }}>FREE </Text></View>
            </View>

            <View style={styles.gstdiv}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text>Grand Total</Text><Text>₹ 1040.00 </Text></View>
            </View>


            <View style={styles.confirmation}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }}>Payment Status</Text><Text>Paid</Text></View>

            </View>






        </View>





    );
};
export default Orderidcomp


const styles = StyleSheet.create({

    mainview: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 35,
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

        paddingHorizontal: 15,


        elevation: 5,
    },
    consultantdiv: {
        justifyContent: 'space-evenly',
        height: 150,
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
    },
    paymentsummarydiv: {
        justifyContent: 'space-evenly',
        height: 160,
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',

    },
    gstdiv: {
        justifyContent: 'space-evenly',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
    },
    paymentmethoddiv: {
        justifyContent: 'space-evenly',
        height: 50,

        borderColor: '#DFDDDD',
    },

    yesbutton: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 15,
        borderColor: '#009987',
        color: '#009987',
        marginRight: 10,
    },
    nobutton: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderRadius: 15,
        borderColor: '#EB4335',
        color: '#EB4335',
    },
    downloadprescriptiontext: {
        color: '#009987',
        borderWidth: 1,
        paddingHorizontal: 30,

        paddingVertical: 7,
        borderRadius: 5,
        borderColor: '#00E0C5',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',


    },
    downloadprescriptiondiv: {
        paddingRight: 110,
    },
    medicinestext: {
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    medicinesdiv: {
        justifyContent: 'space-evenly',
        height: 110,
        paddingVertical: 10,
    },
    details: {
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
        
        backgroundColor:'black'
    },

    trackdiv: {
        justifyContent: 'space-evenly',
        height: 80,
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
    },
    backicon: {
        color: '#009987',
    },

    confirmation: {
        justifyContent: 'space-evenly',
        height: 70,
        paddingHorizontal: 3,

        borderColor: '#DFDDDD',

    },
    deliverydiv: {
        justifyContent: 'center',
        height: 90,
        borderBottomWidth: 1,
        borderColor: '#DFDDDD',
        paddingVertical: 20,
    },
    medicinediv: {
        justifyContent: 'space-evenly',


        paddingVertical: 20,


    },
    medicinetext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },


})