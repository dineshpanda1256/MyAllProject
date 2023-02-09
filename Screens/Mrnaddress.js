import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Medicine list</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.Box}>
          <Text style={styles.Order}>Order detailes</Text>
          <View style={{alignItems: 'center'}}>
            <View style={styles.line}></View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Row1}>
              <View style={styles.row}>
                <Text style={styles.Medi}>Montec LV 500MG</Text>
                {/* <Text style={styles.Medi}>x 2</Text> */}
              </View>
              <View>
                <Text style={styles.Price}>₹ 400.00</Text>
              </View>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Paracetomal</Text>
              {/* <Text style={styles.Medi}>x 10</Text> */}
              <View>
                <Text style={styles.Price}>₹ 100.00</Text>
              </View>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Dolo-650</Text>
              {/* <Text style={styles.Medi}>x 5</Text> */}
              <View>
                <Text style={styles.Price}>₹ 540.00</Text>
              </View>
            </View>
            <View style={styles.Row1}>
              <Text style={styles.Medi}>Glucose-D</Text>
              {/* <Text style={styles.Medi}>x4</Text> */}
              <View>
                <Text style={styles.Price}>₹ 450.00</Text>
              </View>
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

      <View style={styles.Box1}>
        <View>
          <Text style={styles.text1}>
            Deliver To Sagarika Mohanty, Nandan Vihar,
          </Text>
        </View>
        <View>
          <Text style={styles.text2}>Patia, Bhubaneswar, 751024</Text>
        </View>
        <View>
          <Text style={styles.text3}>Deliver By 26 Feb 2022 | 10.00 PM</Text>
        </View>
        <TouchableOpacity
          style={styles.text4}
          onPress={() => navigation.navigate('Addaddress')}>
          <Text style={styles.address}>Change Address</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity onPress={() => navigation.navigate('Orderpayment')}>
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
  MEDI: {
    color: '#717171',
    fontSize: 10,
    marginTop: 7,
  },
  Price: {
    color: '#717171',
    fontSize: 10,
    marginTop: 7,
  },
  address: {
    fontSize: 11,
    color: '#009987',
  },
  text1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 11,
    color: 'black',
  },
  text2: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 11,
    color: 'black',
  },
  Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
  },
  text3: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 11,
    color: 'black',
  },
  text4: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 15,
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#009987',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.03,
    color: '#009987',
  },
  Medi: {
    color: '#717171',
    fontSize: 10,
    marginTop: 7,
  },
  img2: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    //  justifyContent: 'space-between',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    width: Dimensions.get('window').width * 0.82,
    marginTop: 15,
    marginBottom: 10,
  },
  Order: {
    marginTop: 10,
    marginLeft: 15,
    color: '#222222',
    fontSize: 11,
  },
  Box: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#E1E1E1',
  },
  Box1: {
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.175,
    marginTop: 15,
    marginLeft: 20,
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
    marginTop: 60,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  head: {
    marginTop: 30,
    marginLeft: 80,
    color: 'black',
  },
});

export default Screen3;
