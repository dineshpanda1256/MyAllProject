import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 


const Testbuttoncomp = (props) => {
    const navigation = useNavigation();
    return (
     
       
        <View style={styles.mainview}>
           
           
            <View style={styles.twonodiv}>
           <View style={styles.bookings}>
            <Text style={styles.bookingstext} onPress={() => navigation.navigate('Orderhistory')}>Bookings</Text>
           </View>
           <View style={styles.orders}>
           <Text  style={styles.orderstext} onPress={() => navigation.navigate('Orderheading')} >Orders</Text>     
           </View>
           <View style={styles.tests}>
           <Text style={styles.tesbutton} onPress={() => navigation.navigate('Testhistory')} >Test</Text>  
           </View>
            </View>
            
           
       
        </View>
       

    );
};
export default Testbuttoncomp


const styles = StyleSheet.create({

    mainview: {
       
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal:10,
        marginBottom:30,
        borderColor:'#DFDDDD',
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        justifyContent:'space-evenly',
    },
    
    backicon:{
             backgroundColor:'#EFF3FA',
             borderRadius:30,
             marginRight:10,
             
             
                },

                headingdiv:{
                    justifyContent:'flex-start',
                    flexDirection:'row',
                    paddingHorizontal:5,
                    paddingVertical:5,
                },
                textheading:{
                    fontSize:20,
                   paddingVertical:10,
                    paddingHorizontal:70,
                },

                twonodiv:{
                    justifyContent:'space-between',
                    flexDirection:'row',
                    borderWidth:1,
                    borderColor:'#C9CCD3',
                    paddingHorizontal:10,
                    paddingVertical:9,
                    marginHorizontal:10,
                    marginVertical:10,
                    borderRadius:5,
                },
                bookings:{
                   
                    // backgroundColor:'#009987',
                    // borderRadius:5,
                    
                
                },
                bookingstext:{
                            paddingHorizontal:14,
                            paddingVertical:8,
                            // color:'white',
                },

                orderstext:{


                   
                },





                orders:{
                        justifyContent:'center',
                    
                       
                },
                tests:{
                        justifyContent:'center',
                        
                        backgroundColor:'#009987',
                        borderRadius:5,
                      
                        marginRight:15,
                        paddingHorizontal:23,
                        paddingVertical:8,
                },
                tesbutton:{
                    color:'white',
                },


})