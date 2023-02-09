import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Backicon = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainview}>
      {/* <View style={styles.twonodiv}>
           <View style={styles.bookings}>
            <Text style={styles.bookingstext}>{props.data.booking}</Text>
           </View>
           <View style={styles.orders}>
           <Text style={styles.orderstext} onPress={() => navigation.navigate('Orderhistab')}>{props.data.order}</Text>     
           </View>
           <View style={styles.tests}>
           <Text>{props.data.test}</Text>
           </View>
            </View> */}
      <View style={styles.holediv}>
        <TouchableOpacity style={styles.icondiv}>
          <Icon1
            name="left"
            style={styles.backicon}
            onPress={() => {
              navigation.goBack();
            }}
            size={20}
          />
        </TouchableOpacity>
        <View style={styles.orderdiv}>
          <Text style={styles.ordertext}>Order History</Text>
        </View>
      </View>
    </View>
  );
};

export default Backicon;

const styles = StyleSheet.create({
  mainview: {
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    justifyContent: 'space-evenly',
  },
  holediv: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  backicon: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 15,
    padding: 10,
    width: 40,
    height: 40,
  },
  icondiv: {},
  ordertext: {
    color: 'black',
    fontSize: 22,
  },
  orderdiv: {
    justifyContent: 'center',
  },

  // headingdiv:{
  //     justifyContent:'flex-start',
  //     flexDirection:'row',
  //     paddingHorizontal:5,
  //     paddingVertical:5,
  // },
  // textheading:{
  //     fontSize:20,
  //    paddingVertical:10,
  //     paddingHorizontal:70,
  // },

  // twonodiv:{
  //     justifyContent:'space-between',
  //     flexDirection:'row',
  //     borderWidth:1,
  //     borderColor:'#C9CCD3',
  //     paddingHorizontal:10,
  //     paddingVertical:9,
  //     marginHorizontal:10,
  //     marginVertical:10,
  //     borderRadius:5,
  // },
  // bookings:{

  //     backgroundColor:'#009987',
  //     borderRadius:5,

  // },
  // bookingstext:{
  //             paddingHorizontal:14,
  //             paddingVertical:8,
  //             color:'white',
  // },
  // orders:{
  //         justifyContent:'center',
  //         paddingRight:20,
  // },
  // tests:{
  //         justifyContent:'center',
  //         paddingRight:10,
  // },
  // orderstext:{

  // },
});
