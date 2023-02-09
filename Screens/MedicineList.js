import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Medicines_Data from '../Components/Medicines_Data';
import SearchBar1 from '../Components/SearchBar1';
import { useNavigation } from '@react-navigation/native';

export default function MedicineList() {
  var api = [
    {
      url: require('../Assets/Image/Paracetamol.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
    {
      url: require('../Assets/Image/typhoid.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
    {
      url: require('../Assets/Image/coughSyrup.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
    {
      url: require('../Assets/Image/mask.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
    {
      url: require('../Assets/Image/typhoid.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
    {
      url: require('../Assets/Image/Paracetamol.png'),
      name: 'Paracetamol 500mg',
      price: '₹ 80.00',
      originalPrice: '100',
      offer: '10% off',
    },
  ];

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SearchBar */}
        <View style={{paddingHorizontal: 20}}>
          <SearchBar1 />
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', marginHorizontal: 15 }}>
          {api.map(e => {
            return <Medicines_Data data={e} />;
          })}
        </View>
        {/* <Medicines_Data data= {api[0] }/> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    paddingTop: 20,
    // paddingHorizontal: 15,

  },
});
