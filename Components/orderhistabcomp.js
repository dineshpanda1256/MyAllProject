import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';




const Historycomp = (props) => {
    return (

        <View style={styles.mainview}>
            <Text style={styles.heading}>{props.data.centername}</Text>
            <View style={styles.detailsview}>
                <View style={{ flexDirection: 'row', justifyContent:'center'}}>
                   
                    <Text style={{fontSize:12,color: '#717171',marginHorizontal:5,}}>{props.data.name}</Text>
                    
                </View>
                <View style={{ flexDirection: 'row',  justifyContent:'center'}}>
                    
                    <Text style={{fontSize:12,fontWeight:'bold',color: '#717171',marginHorizontal:5,}}>{props.data.time}am.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                  
                    <Text style={{fontSize:12,fontWeight:'bold',color: '#717171',marginHorizontal:5,}}>02.02.2000</Text>
                </View>
            </View>
           <View style={{flexDirection:'row',justifyContent:"space-between"}}>
               <Text style={{fontSize:13,paddingHorizontal:20,fontWeight:'bold',color: '#222222',}}>{props.data.bookingtype}</Text>
               <Text style={{fontSize:13,fontWeight:'bold',color: '#222222',}}>240</Text>
           </View>
        </View>
    );
};
export default Historycomp


const styles = StyleSheet.create({

    mainview: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal:10,
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
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222'
    },
    detailsview: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:10,
        marginVertical:15,
        borderBottomWidth:1,
        borderColor:"#DFDDDD",

    }

})