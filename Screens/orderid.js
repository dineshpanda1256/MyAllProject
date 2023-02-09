import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Orderidcomp from '../Components/orderidcomp'
import Icon1 from 'react-native-vector-icons/AntDesign';

const Orderid = ({ navigation }) => {
    var opi = [
        {

            name: 'Order details',

        },

    ]

    return (
        <ScrollView style={styles.contrainer}>

            <View style={styles.startedbtn} ><Icon1 name='left' style={styles.backicon} onPress={() => navigation.navigate('Order')} size={20} /><Text style={{ color: 'black', fontSize: 25, }}>Orders</Text></View>

            {
                opi.map((dinesh4) => {
                    return (
                        <Orderidcomp data={dinesh4} />
                    )
                })
            }

            <View style={styles.button} ><Text style={{ color: 'white' }}>Thank You</Text></View>


            <TouchableOpacity>
                <Text style={{ marginLeft: 180, marginTop: 50 }} onPress={() => navigation.navigate('Home')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity>


        </ScrollView>


    );

};

export default Orderid

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 10,
        backgroundColor: '#009987',

    },
    backicon: {
        backgroundColor: '#EFF3FA',
        borderRadius: 30,
        marginRight: 16,
        padding: 10,
        width: 43,
    },
    startedbtn: {

        borderRadius: 20,
        paddingTop: 40,
        paddingBottom: 20,
        width: 80,
        color: 'black',
        marginLeft: 20,
        marginTop: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
}
)
