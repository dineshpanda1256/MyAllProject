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
import React, {useState} from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import PatholabDetailesComponent from '../Components/PatholabDetailesComponent';

const PatholabDetailes = () => {
  const navigation = useNavigation();

  const api = [
    {
      name: 'Complete Blood Count (CBC)',
      price: '₹ 350.00',
      offer: '10% off',
    },
    {
      name: 'Thyroid Stimulating Hormone (TSH)',
      price: '₹ 350.00',
      offer: '10% off',
    },
    {
      name: 'Liver Function Test',
      price: '₹ 350.00',
      offer: '10% off',
    },
    {
      name: 'Thyphoid Test',
      price: '₹ 350.00',
      offer: '10% off',
    },
    {
      name: 'Thyroid Stimulating Hormone (TSH)',
      price: '₹ 350.00',
      offer: '10% off',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.firstrowDiv}>
          <View>
            <AntDesign
              name="left"
              size={20}
              color="#666"
              style={styles.leftIcon}
              onPress={() => {
                navigation.navigate('PatholabListScreen');
              }}
            />
          </View>
        </View>

        <View style={styles.lifecareImgTxtDiv}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../Assets/Image/Patholab2.png')}
              style={styles.lifeCareImg}
            />
          </View>
          <View style={{marginLeft: 15}}>
            <Text style={styles.lifecarePathologyTxt}>Life Care Pathology</Text>
            <View style={styles.starDiv}>
              <AntDesign name="star" size={10} color="#FBBC05" />
              <AntDesign name="star" size={10} color="#FBBC05" />
              <AntDesign name="star" size={10} color="#FBBC05" />
              <AntDesign name="star" size={10} color="#FBBC05" />
              <AntDesign name="star" size={10} color="#FBBC05" />
            </View>
            <Text style={styles.openTxt}>Open : 10.30AM - 5.30PM</Text>
          </View>
        </View>

        {/* book now whole div */}
        <View style={styles.bookNowWholeDiv}>
          <Text style={styles.orderWithPrescriptionTxt}>
            Order with prescription or MRN Number
          </Text>
          <Text style={styles.uploadWithPrescriptionTxt}>
            Upload your prescription or enter your MRN
          </Text>
          <Text style={styles.uploadWithPrescriptionTxt}>
            Number to book for test..
          </Text>
          <TouchableOpacity style={styles.bookNowDiv}>
            <View>
              <Text style={styles.bookNowTxt}>Book Now</Text>
            </View>
            <View>
              <AntDesign name="play" size={15} color="#009987" />
            </View>
          </TouchableOpacity>
        </View>

        {/* test available here */}
        <View>
          <Text style={styles.orderWithPrescriptionTxt}>
            Test Available Here
          </Text>
          <View>
            {api.map(e => {
              return <PatholabDetailesComponent data={e} />;
            })}
          </View>
        </View>

        {/* button */}
        <View style={styles.btnMainDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Porderdetailes')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.btnDiv}>
              <Text style={styles.btnText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatholabDetailes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  firstrowDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginRight: 20,
    // marginVertical: 15,
    borderRadius: 30,
  },

  lifecareImgTxtDiv: {
    flexDirection: 'row',
  },
  lifeCareImg: {
    width: 150,
    height: 130,
    margin: 5,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 20,
  },

  lifecarePathologyTxt: {
    color: '#232323',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 35,
  },
  starDiv: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  openTxt: {
    color: '#232323',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 10,
  },

  // book now whole div
  bookNowWholeDiv: {
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: '#fff',
    borderColor: '#00E0C5',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 20,
    paddingLeft: 15,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  orderWithPrescriptionTxt: {
    color: '#232323',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.8,
    marginBottom: 15,
  },
  uploadWithPrescriptionTxt: {
    color: '#6B779A',
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 12,
  },
  bookNowDiv: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookNowTxt: {
    color: '#009987',
    fontFamily: 'Mulish',
    fontWeight: '900',
    fontSize: 14,
    marginRight: 10,
  },

  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnDiv: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 30,
  },
  btnText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 18,
  },
});
