import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function PatholabDetailesComponent(props) {

  const [checked, setChecked] = useState(false);
  // const isCheckedIsActive = props1 => {
  //   return setChecked.name == props1.name;
  // };

  return (
    <TouchableOpacity style={[styles.mainDiv, {
      borderColor: checked ? '#00E0C5' : '#e1e1e1',
    },]} onPress={() => setChecked(!checked)}>
      <View>
        <Text style={styles.nameTxt}>{props.data.name}</Text>
        <View style={styles.priceOfferDiv}>
          <Text style={styles.priceTxt}>Price:{props.data.price}</Text>
          <Text style={styles.offerTxt}>{props.data.offer}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="arrow-forward-circle-outline"
          size={20}
          color="#00E0C5"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: '#fff',
    // borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameTxt: {
    color: '#232323',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 10,
  },
  priceOfferDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTxt: {
    color: '#232323',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 8,
    marginTop: 5,
    marginRight: 4
  },
  offerTxt: {
    color: '#00E0C5',
    fontFamily: 'Mulish',
    fontWeight: '500',
    fontSize: 8,
    marginTop: 5,
  },
});
