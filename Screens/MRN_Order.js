import React from 'react';
import {
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Icon name="leftcircleo"></Icon> */}
      <Text style={styles.head}>Orders</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.Box}>
          <Text style={styles.Order}>Order detailes</Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Montec LV 500MG</Text>
              <Text style={styles.Medi}>x 2</Text>
              <Text style={styles.Medi}>₹ 400.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Paracetomal</Text>
              <Text style={styles.Medi}>x 10</Text>
              <Text style={styles.Medi}>₹ 100.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Dolo-650</Text>
              <Text style={styles.Medi}>x 5</Text>
              <Text style={styles.Medi}>₹ 540.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Glucose-D</Text>
              <Text style={styles.Medi}>x4</Text>
              <Text style={styles.Medi}>₹ 450.00</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}></View>
          </View>
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={styles.Payment}>Payment Summary</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Row1}>
              <Text style={styles.MEDI}>Montec LV 500MG</Text>
              <Text style={styles.MEDI}>₹ 1240.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.MEDI}>Paracetomal</Text>
              <Text style={styles.MEDI}>₹ 2400.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.MEDI}>Dolo-650</Text>
              <Text style={styles.MEDI}>₹ 40.00</Text>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.MEDI}>Glucose-D</Text>
              <Text style={styles.Free}>Free</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Row1}>
              <Text style={styles.MEDI}>Grand Total</Text>
              <Text style={styles.MEDI}>₹ 1240.00</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.Deliver}>Deliver By 26 Feb 2022 | 10.00PM</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.Add}>
          <Text style={styles.Address}>Add New Address</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity onPress={() => navigation.navigate('Mrnaddress')}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.btn1}>Proceed to Pay</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Add: {
    marginTop: 15,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.07,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#009987',
    justifyContent: 'center',
  },
  Address: {
    fontSize: 11,
    color: '#009987',
  },
  Deliver: {
    fontSize: 11,
    color: '#222222',
    marginLeft: 15,
    marginTop: 15,
  },
  Free: {
    color: '#009987',
    fontSize: 10,
    marginTop: 5,
  },
  Payment: {
    color: '#222222',
    fontSize: 11,
    marginTop: 5,
    marginLeft: 15,
  },
  Medi: {
    color: '#717171',
    fontSize: 10,
    marginTop: 5,
  },
  MEDI: {
    color: '#717171',
    fontSize: 10,
    marginTop: 7,
  },
  Box: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#E1E1E1',
  },
  btn1: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  btn: {
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.1,
    marginTop: 100,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  head: {
    color: '#222222',
    marginLeft: 60,
    marginTop: 56,
    fontSize: 17,
  },
  Order: {
    marginTop: 10,
    marginLeft: 15,
    color: '#222222',
    fontSize: 11,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    width: Dimensions.get('window').width * 0.82,
    marginTop: 15,
    marginBottom: 10,
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
  },
});
export default Screen1;
