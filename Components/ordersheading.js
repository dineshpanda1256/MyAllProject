import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
 import Icon from 'react-native-vector-icons/AntDesign';
 import { useNavigation } from '@react-navigation/native';

const Orderheadingcomp = (props) => {
    const navigation = useNavigation();

    return (
       
        <View style={styles.mainview}>
           
           
            <View style={styles.twonodiv}>
           <View style={styles.bookings}>
            <Text style={styles.bookingstext} onPress={() => navigation.navigate('Orderhistory')}>{props.data.booking}</Text>
           </View>
           <View style={styles.orders}>
           <Text  style={styles.orderstext} onPress={() => navigation.navigate('Orderheading')}>{props.data.order}</Text>     
           </View>
           <View style={styles.tests}>
           <Text onPress={() => navigation.navigate('Testhistory')}>{props.data.test}</Text>
           </View>
            </View>
            
           
       
        </View>
       

    );

};

export default Orderheadingcomp


const styles = StyleSheet.create({

    mainview: {
       
        borderRadius: 10,
        marginVertical: 10,
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
                          
                },
                orders:{
                        justifyContent:'center',
                        marginRight:20,
                        backgroundColor:'#009987',
                        borderRadius:5,
                        color:'white',
                       
    
                },
                tests:{
                        justifyContent:'center',
                        paddingRight:10,
                       
                },
                orderstext:{
                                color:'white',
                                 paddingHorizontal:14,
                            
                               
                },


           

})