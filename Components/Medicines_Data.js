import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import BuyNowBtn from './BuyNowBtn';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function Medicines_Data(props) {
  return (
    <View style={styles.mainDiv}>
      <View style={styles.rows}>
        <View style={styles.oneDiv}>
          <View style={styles.ImgDiv}>
            <Image style={styles.medcineimg} source={props.data.url} />
          </View>
          <View style={styles.TxtDiv}>
            <Text style={styles.nameTxt}>{props.data.name}</Text>
            <View style={styles.priceDiv}>
              <Text style={styles.priceTxt}>{props.data.price}</Text>
              <Text style={styles.originalPriceTxt}>
                {props.data.originalPrice}
              </Text>
              <Text style={styles.offerTxt}>{props.data.offer}</Text>
            </View>
            <View style={styles.starDiv}>
              <AntDesign name="star" size={13} color="#FBBC05" />
              <AntDesign name="star" size={13} color="#FBBC05" />
              <AntDesign name="star" size={13} color="#FBBC05" />
              <AntDesign name="star" size={13} color="#FBBC05" />
              <AntDesign name="star" size={13} color="#FBBC05" />
            </View>
            <View>
              <BuyNowBtn
                onPress={() => navigation.navigate('OrderCart')}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    // backgroundColor: 'red'
  },
  rows: {
    marginTop: 10,
  },
  oneDiv: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.43,
    justifyContent: 'center',
    alignItems: 'center'
    // height: 190,
    // marginRight: 10,
    // marginBottom: 10,
    // marginHorizontal: 8,
  },
  ImgDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  TxtDiv: {
    justifyContent: 'flex-start',
  },
  nameTxt: {
    color: '#222222',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 5,
  },
  priceDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
  originalPriceTxt: {
    color: '#000',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  offerTxt: {
    color: '#009987',
    letterSpacing: 0.3,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
    marginBottom: 5,
  },
  starDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  medcineimg: {
    width: 150,
    height: 100,
  },
});