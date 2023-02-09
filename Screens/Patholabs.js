import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Patholabs = () => {
  const {height, width} = Dimensions.get('screen');
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
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
        {/* <Text
          style={{
            fontWeight: '400',
            marginLeft: 8,
            fontFamily: 'Mulish',
            letterSpacing: 0.3,
            fontSize: 18,
            color: '#222B45',
          }}>
          Clinics
        </Text> */}
      </View>
      <View
        style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 350,
            height: 170,
            borderRadius: 10,
          }}
          source={require('../Assets/Image/clinic2.png')}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              fontFamily: 'Mulish',
              letterSpacing: 1,
              color: '#009987',
              textTransform: 'capitalize',
            }}>
            Homopathetic Clinic
          </Text>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 10, fontFamily: 'Mulish'}}>
              Nandan Bihar , Patia, Bhubaneswar,
            </Text>
            <Text style={{fontSize: 10, fontFamily: 'Mulish'}}>
              Pincode:751024
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 10}}>
                <FontAwesomeIcon name="star" size={10} color={'gold'} />
                4.5
              </Text>
              <Text style={{fontSize: 10}}>(135 reviews)</Text>
            </View>
          </View>
        </View>
        {/* <View style={{}}>

                    <Text style={{
                        fontSize: 8, color: "#009987"
                    }}>Get Direction</Text>
                </View> */}
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 10}}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{fontSize: 18, fontFamily: 'Mulish', letterSpacing: 0.3}}>
            Description
          </Text>
        </View>
        <Text style={{fontSize: 12, lineHeight: 20, letterSpacing: 0.3}}>
          Dr. Kate Rose is a top specialist at Delhi AIIMS Hospital. She has
          achieved several awards and recognition for is contribution and
          service in her own field. She is available for private consultation.
        </Text>
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 10}}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{fontSize: 18, fontFamily: 'Mulish', letterSpacing: 0.3}}>
            Doctors Available
          </Text>
        </View>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}
          horizontal={true}>
          <View>
            <View style={styles.CardContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Doctors', {});
                }}
                style={styles.innerCardContainer}>
                <View style={styles.detailsCardContainer}>
                  <Image
                    source={require('../Assets/Image/doc1.png')}
                    style={styles.DoctorCardImage}
                  />
                </View>
                <Text style={{fontSize: 10}}>Dr Kate Rose</Text>
                <Text style={{fontSize: 10}}>pediatrician</Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                </View>
              </TouchableOpacity>
              {/*  */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Doctors', {});
                }}
                style={styles.innerCardContainer}>
                <View style={styles.detailsCardContainer}>
                  <Image
                    source={require('../Assets/Image/doc2.png')}
                    style={styles.DoctorCardImage}
                  />
                </View>
                <Text style={{fontSize: 10}}>Dr Kate Rose</Text>
                <Text style={{fontSize: 10}}>pediatrician</Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Doctors', {});
                }}
                style={styles.innerCardContainer}>
                <View style={styles.detailsCardContainer}>
                  <Image
                    source={require('../Assets/Image/doc1.png')}
                    style={styles.DoctorCardImage}
                  />
                </View>
                <Text style={{fontSize: 10}}>Dr Kate Rose</Text>
                <Text style={{fontSize: 10}}>pediatrician</Text>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                  <FontAwesomeIcon name="star" color="gold" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* end */}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Patholabs;

const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10
  },
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F5',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    //
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
  detailsCardContainer: {
    backgroundColor: '#009987',
    height: 120,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    //borderBottomLeftRadius: 20,
  },
  DoctorCardImage: {
    height: 120,
    width: 100
  },
});
