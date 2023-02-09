import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iconi from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Billcomp2 = (props) => {
    const navigation = useNavigation();
    return (
<View style={styles.medicinediv}>
                    <View style={styles.medicinetext}><View style={styles.medicinequanity}><Text style={{ marginBottom: 0, }}>{props.data.med1}</Text><View style={{justifyContent:'flex-start',flexDirection:'row',width: Dimensions.get('window').width * 0.10,}}><Text>{props.data.quantity}</Text></View></View><View style={{justifyContent:'flex-start',flexDirection:'row',width: Dimensions.get('window').width * 0.15,}}><Text>{props.data.price}</Text></View></View>
                    {/* <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View>
                    <View style={styles.medicinetext}><Text style={{ marginBottom: 10, }}>Montec LC 500MG</Text><Text>x2</Text><Text>40.00</Text></View> */}


                </View>
       

    );
};
export default Billcomp2


const styles = StyleSheet.create({
    medicinediv: {
        justifyContent: 'space-evenly',
        // borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical:5,
        


    },
    medicinetext: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    medicinequanity:{
                        justifyContent:'space-between',
                        flexDirection:'row',
                        width: Dimensions.get('window').width * 0.450,
                        
    },
   
})