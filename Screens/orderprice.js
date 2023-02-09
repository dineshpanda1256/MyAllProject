import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Price from '../Components/orderpricecomp';
import Backicon from '../Components/backordercomp';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Orderprice = ({navigation}) => {
  var opi = [
    {
      name: 'Order details',
    },
  ];
  var zpi = [
    {
      booking: 'Bookings',
      order: 'Orders',
      test: 'Test',
    },
  ];

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.contrainer}>
      {/* {
     zpi.map((dinesh1)=> {
         return(
             <Backicon data={dinesh1}/>
         )
     }) 
  }  */}

      <View style={styles.startedbtn}>
        <Icon1
          name="left"
          style={styles.backicon}
          onPress={() => navigation.navigate('Orderheading')}
          size={20}
        />
      </View>

      {opi.map(dinesh4 => {
        return <Price data={dinesh4} />;
      })}

      {/* 
<TouchableOpacity>
         <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Mapp')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Orderprice;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingTop: 30,

    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 5,
  },
});
