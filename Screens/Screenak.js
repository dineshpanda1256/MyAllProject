import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <View>
          <Image source={require('../Assets/Image/backicon.png')} />
        </View>
        <View>
          <Text style={styles.Heading}>Medicines</Text>
        </View>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Search Medicine & Health Product"></TextInput>
        <Image
          style={styles.img1}
          source={require('../Assets/Image/search.png')}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.img2}
          source={require('../Assets/Image/Paracetamol.png')}
        />
      </View>

      <View style={styles.para}>
        <Text style={styles.paratxt}>Paracetamol 500mg</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.pricetxt}>
          ₹ 80.00<Text style={styles.clr}> 10% off</Text>
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.line}></Text>
      </View>

      <View>
        <Text style={styles.address1}>
          Deliver To Sagarika Mohanty, Nandan Vihar,
        </Text>
      </View>
      <View>
        <Text style={styles.address2}>Pattia, Bhubaneswar, 751024</Text>
      </View>

      <View style={styles.deliverRow}>
        <View style={styles.Deliver}>
          <Text style={styles.dlvrTime}>Deliver By 26 Feb 2022 | 10.00 PM</Text>
        </View>
        <View style={styles.Change}>
          <Text style={styles.add}>Change Address</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.line}></Text>
      </View>

      <View style={styles.lastDiv}>
        <View style={styles.User}>
          <Text style={styles.user}>Uses of Paracetamol</Text>
        </View>
        <View>
          <Text style={styles.Fever}>Fever</Text>
          <Text style={styles.Cold}>Cold</Text>
          <Text style={styles.Headach}>Headach</Text>
          <Text style={styles.BodyPain}>Body Pain</Text>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <LinearGradient style={styles.btn} colors={['#00E0C5', '#009987']}>
          <TouchableOpacity>
            <View style={styles.btn1}>
              <Text
                style={styles.btn2}
                onPress={() => navigation.navigate('Screen3')}>
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    marginTop: 20,
    color: 'black',
    // marginLeft: 80,
  },
  div1: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  Fever: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 9.5,
  },
  Cold: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 9.5,
  },
  Headach: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 9.5,
  },
  BodyPain: {
    marginLeft: 20,
    marginTop: 5,
    fontSize: 9.5,
  },
  user: {
    marginLeft: 15,
    marginTop: 15,
    color: 'black',
    fontSize: 12,
  },
  Change: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.21,
    height: Dimensions.get('window').height * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#37a987',
    borderRadius: 7,
  },
  address2: {
    fontSize: 12,
    marginLeft: 15,
  },
  address1: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 15,
  },
  dlvrTime: {
    fontSize: 10,
  },
  add: {
    fontSize: 9,
  },
  deliverRow: {
    marginLeft: 15,
    marginTop: 20,
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'space-between',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clr: {
    color: '#37a987',
  },
  para: {
    marginTop: 20,
    marginLeft: 15,
  },
  price: {
    marginTop: 5,
    marginLeft: 15,
  },
  pricetxt: {
    fontSize: 10,
    color: 'black',
  },
  paratxt: {
    fontSize: 12,
    color: 'black',
  },
  container: {
    backgroundColor: 'white',
    height: 800,
  },
  btn1: {
    color: 'white',
    alignItems: 'center',
  },
  btn2: {
    color: 'white',
    marginTop: 5,
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.045,
    borderRadius: 20,
    borderColor: '#37a987',
  },
  hed1: {
    marginLeft: 80,
    marginTop: 30,
    color: 'black',
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 15,
    backgroundColor: '#EFF3FA',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
  img1: {
    height: 22,
  },
  img2: {
    marginTop: 10,
  },
});

export default Screen3;
