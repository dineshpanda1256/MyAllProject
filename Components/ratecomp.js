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


const Ratecomp = (props) => {
    const navigation = useNavigation();

    
    return (

        <View style={styles.assdiv}>
        

        </View>


    );
};
export default Ratecomp


const styles = StyleSheet.create({

    assdiv: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
        
    },

})