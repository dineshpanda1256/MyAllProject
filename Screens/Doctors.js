import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');
export default function Doctors() {
  const navigation = useNavigation();

  const infoDoctorData = [
    {
      title: 'Dr.Bellamy N',
      isonline: true,
      specialist: 'Viralogist',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/6.png'),
    },
    {
      title: 'Dr Mensah T',
      isonline: false,
      specialist: 'Oncologists',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/2.png'),
    },
    {
      title: 'Dr Klimisch j',
      isonline: false,
      specialist: 'Surgon',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/3.png'),
    },
    {
      title: 'Dr Martinez ',
      isonline: true,
      specialist: 'Pediatrician',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/4.png'),
    },
    {
      title: 'Dr.Marc M',
      isonline: true,
      specialist: 'Rheumatologists',
      rating: '4.3',
      reviews: '(130 reviews)',
      image: require('../Assets/Image/5.png'),
    },
    {
      title: "Dr.O'Boyle J",
      isonline: false,
      specialist: 'Radiologists',
      rating: '4.5',
      reviews: '(135 reviews)',
      image: require('../Assets/Image/1.png'),
    },
  ];
  return (
    <View style={styles.doctorContainer}>
      <View
        style={{
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
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
          <Ionicons name="chevron-back-outline" color={'gray'} size={20} />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', marginLeft: 8}}>Doctors</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginHorizontal: 15,
          marginVertical: 7,
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
      {/* start try map */}
      <ScrollView>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {infoDoctorData.map((list, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('profile', {});
                }}
                View
                style={styles.cardInnerContainer}
                key={index}>
                <View style={styles.cardImageContainer}>
                  {list.isonline ? (
                    <View style={styles.cardOnlineLabel} />
                  ) : null}
                  <Image
                    source={list.image}
                    style={{borderRadius: 50, height: 100, width: 100}}
                    resizeMode={'contain'}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Mulish',
                    letterSpacing: 0.2,
                  }}>
                  {list.title}
                </Text>
                <Text style={{fontSize: 12}}>{list.specialist}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 10}}>
                    <FontAwesome5Icons name="star" color={'gold'} />
                    {list.rating}
                  </Text>
                  <Text style={{fontSize: 10}}>{list.reviews}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  doctorContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardImageContainer: {
    position: 'relative',
    marginVertical: 10,
    // marginLeft: 6,
    paddingHorizontal: 10,
  },
  cardOnlineLabel: {
    height: 15,
    width: 15,
    backgroundColor: '#009987',
    borderRadius: 50,
    position: 'absolute',
    top: 15,
    right: 10,
    zIndex: 1,
  },
  cardInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 22,
    marginVertical: 9,
    width: width / 2.2,
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
    elevation: 4,
  },
});
