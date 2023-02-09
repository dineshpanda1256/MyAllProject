import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

const Noti = ({ navigation }) => {
    return (
        <ScrollView style={styles.contrainer}>
            
                <TouchableOpacity style={styles.icondiv}>
                
                        <Icon1 name='left' onPress={() => {
          navigation.goBack();
        }} style={styles.googleicon} size={22} />
                </TouchableOpacity>
                
                

           <View style={styles.asmv}>
            <View onPress={() => navigation.navigate('Otp')} style={styles.main} >
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text onPress={() => navigation.navigate('Otp')} style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           <View style={styles.asmv}>
            <View style={styles.main}>
               <View style={{flexDirection:'row'}}>
               <Icon2 name='dot-single' style={{color:'#009987'}}  size={25} />
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize:13,}}>Your Appointment is Booked at 9.30pm on 26th Apr</Text></View></View>
                <View style={{justifyContent:'flex-start',paddingLeft:26,}}><Text>1hr ago</Text></View>
                <View></View>
            </View>
           </View>
           
        </ScrollView>


    );

};

export default Noti

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    asmv:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,

    },
    main:{
        width : Dimensions.get('screen').width*0.95,
        borderWidth:1.5,
        height : 80,
        borderRadius:15,
        borderColor:'#E7E7E7',
        justifyContent:'center',
        paddingHorizontal:10,
    },
    googleicon:{
               
        padding:9,
        backgroundColor:'#EFF3FA',
        borderRadius:25,
        marginRight:24,
    },
        icondiv: {
            
            justifyContent: 'flex-start',
            flexDirection:'row',
            marginLeft:25,
            marginTop:30,
            marginBottom:25,
        },
   
}
)





           




