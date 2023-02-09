import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');
export default function Clinics() {
  const navigation = useNavigation();
  const infoDoctorData = [
    {
      image: require('../Assets/Image/clinic1.png'),
      clinicname: 'Homeopathic Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic2.png'),
      clinicname: 'Sai Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic2.png'),
      clinicname: 'Sai Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic1.png'),
      clinicname: 'Homeopathic Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic2.png'),
      clinicname: 'Sai Clinic',
      address: 'NandanBihar Patia',
    },
    {
      image: require('../Assets/Image/clinic1.png'),
      clinicname: 'Homeopathic Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic2.png'),
      clinicname: 'Sai Clinic',
      address: 'Nandan Vihar, Patia',
    },
    {
      image: require('../Assets/Image/clinic1.png'),
      clinicname: 'Homeopathic Clinic',
      address: 'Nandan Vihar, Patia',
    },
  ];
  return (
    // start here
    <View style={styles.clinicContainer}>
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 12,
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EFF3FA',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons name="chevron-back-outline" color={'gray'} size={25} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '400',
            marginLeft: 8,
            fontFamily: 'Mulish',
            letterSpacing: 0.3,
            fontSize: 18,
            color: '#222B45',
          }}>
          Clinics
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <FontAwesome5Icons name="map-pin" size={15} color="#009987" />
        <Text
          style={{
            color: '#009987',
            marginLeft: 7,
            fontSize: 14,
            fontFamily: 'Mulish',
          }}>
          Patia, Bhubaneswar
        </Text>
      </View>
      {/* search bar view start */}
      <View style={styles.searchBoxContainer}>
        {/* look here first one is icon then input box and then again icon */}
        <TextInput
          style={{marginRight: 'auto', marginLeft: 5, fontFamily: 'Mulish'}}
          placeholder="Search Clinics"></TextInput>
        <Ionicons
          color={'#626262'}
          size={20}
          style={{fontWeight: 400}}
          name="search-outline"
        />
      </View>
      {/* search bar view end */}
      {/*  */}
      <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 5}}>
        {/* start flat list*/}
        <FlatList
          numColumns={2}
          data={infoDoctorData}
          renderItem={({item}) => {
            return (
              <View style={styles.clinicImage}>
                <Image
                  style={styles.imageView}
                  source={item.image}
                  resizeMode={'cover'}
                />
                <View style={styles.clinicButton}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Patholabs');
                    }}>
                    <Text style={styles.clinicName}>{item.clinicname}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Ionicons
                        name="location-outline"
                        size={10}
                        color="#979797"
                      />
                      <Text
                        style={{fontSize: 8, marginLeft: 3, color: '#979797'}}>
                        {item.address}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        {/* end */}
      </View>
    </View>
    // end here
  );
}
const styles = StyleSheet.create({
  clinicContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: '#EFF3FA',
    borderRadius: 10,
  },
  clinicImage: {
    flex: 1,
    //marginHorizontal: 7,
    height: 150,
    position: 'relative',
    marginVertical: 7,
    marginHorizontal: 5,
  },
  imageView: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10
  },
  clinicButton: {
    paddingHorizontal: 25,
    paddingVertical: 3,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  clinicName: {
    fontSize: 10,
    color: '#009987',
    marginLeft: 2,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,

    //width: width / 2.3,
    alignItems: 'center',
    justifyContent: 'center',
    //
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
