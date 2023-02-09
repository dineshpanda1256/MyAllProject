import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ordercomp from '../Components/ordercomp';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Order = ({navigation}) => {
  var ypi = [
    {
      name: 'Consultant',
    },
  ];
  return (
    <ScrollView style={styles.contrainer}>
      <View>
        <TouchableOpacity>
          {/* <Text onPress={() => navigation.navigate('Ordertwo')}> <Icon name='leftcircleo'  style={styles.backicon} size={30} /></Text> */}
          <View style={styles.startedbtn}>
            <Icon1
              name="left"
              style={styles.backicon}
              onPress={() => navigation.navigate('Orderhistory')}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>

      {ypi.map(dinesh3 => {
        return <Ordercomp data={dinesh3} />;
      })}

      {/* <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('prescription')}> <Icon1 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};
export default Order;

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
    paddingTop: 40,
    paddingBottom: 5,
    width: 80,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
});
