import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DoctorProfile() {
  const [activeService, setActiveService] = useState('call');

  const navigation = useNavigation();

  return (
    <View style={styles.ProfileContainer}>
      <ScrollView>
        <View style={{backgroundColor: '#F4F4F5', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              // marginHorizontal: 20,
              marginVertical: 20
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EFF3FA',
                marginVertical: 20,
                marginHorizontal: 20, padding: 10
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Ionicons name="chevron-back-outline" color={'gray'} size={25} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{ alignItems: 'center' }}>
              <LinearGradient colors={['#00E0C5', '#009987']}
                style={{
                  height: 100,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{
                    height: 90,
                    width: '100%',
                    borderRadius: 70,
                  }}
                  source={require('../Assets/Image/image2.png')}
                  resizeMode={'cover'}
                />
              </LinearGradient>
              <View><Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    fontSize: 20,
                    lineHeight: 25.1,
                    textTransform: 'capitalize',
                    color: '#222222'
                  }}>Dr Kate Rose</Text>
              </View>
              <View><Text
                  style={{
                    textAlign: 'center',
                    marginTop: 5,
                    fontSize: 14,
                    color: '#009987',
                    textTransform: 'capitalize',
                    letterSpacing: 1,
                  }}>pediatrician</Text>
              </View>
            </View>
          </View>
        
        {/* start here for  */}
        <View style={styles.CardContainer}>
          <View style={styles.innerCardContainer}>
            <View style={styles.detailsCardContainer}>
              <Ionicons name="people-outline" color="#7ACEFA" size={30} />
            </View>
            <Text style={{ fontSize: 17 }}>1000+</Text>
            <Text style={{ fontSize: 12 }}>Patients</Text>
          </View>
          {/*  */}
          <View style={styles.innerCardContainer}>
            <View style={styles.detailsCardContainer2}>
              <Ionicons name="ribbon-outline" color="#C7E80040" size={30} />
            </View>
            <Text style={{ fontSize: 17 }}>10Yrs</Text>
            <Text style={{ fontSize: 12 }}>Experience</Text>
          </View>
          {/*  */}
          <View style={styles.innerCardContainer}>
            <View style={styles.detailsCardContainer1}>
              <Ionicons name="star-outline" color="#F9BC0B63" size={30} />
            </View>
            <Text style={{ fontSize: 17 }}>4.5</Text>
            <Text style={{ fontSize: 12 }}>Ratings</Text>
          </View>
        </View>
        </View>

        {/*  */}
        {/* AboutDoctor */}
        <View style={{ marginTop: 15, paddingHorizontal: 15 }}>
          <Text
            style={{ fontSize: 18, fontFamily: 'Mulish', letterSpacing: 0.3, color: '#222222' }}>
            About Doctor
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, lineHeight: 15, letterSpacing: 0.3 }}>
              Dr. Kate Rose is a top specialist at Delhi AIIMS Hospital. She has
              achieved several awards and recognition for is contribution and
              service in her own field. She is available for private
              consultation.
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Mulish', color: '#222222' }}>Work Time</Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Mulish',
              letterSpacing: 0.2,
              lineHeight: 20,
              fontStyle: 'normal',
            }}>
            Mon - Sat (08:30 AM - 09:00 PM)
          </Text>
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontFamily: 'Mulish', color: '#222222' }}>Services</Text>
          <View
            style={[
              { marginBottom: 10, padding: 3 },
              activeService == 'call' ? styles.activeService : null,
            ]}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => setActiveService('call')||navigation.navigate("Appointment")}>
              <View
                style={[
                  styles.servicesIconContainer,
                  { backgroundColor: '#7ACEFA26', borderColor: '#7ACEFA' },
                ]}>
                <Ionicons name="call" color="#7ACEFA" size={30} />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'Mulish' }}>
                  Call a doctor at home
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Get diagnosed in the comfort of your Home
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              { marginBottom: 10, padding: 3, borderRadius: 5 },
              activeService == 'bookAppointment' ? styles.activeService : null,
            ]}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => setActiveService('bookAppointment')||navigation.navigate("AppointmentBook")}>
              <View
                style={[
                  styles.servicesIconContainer,
                  { backgroundColor: '#C7E8004F', borderColor: '#C7E8004F' },
                ]}>
                <FontAwesome5Icons
                  name="calendar"
                  color="#C7E8004F"
                  size={30}
                />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'Mulish' }}>
                  Book appointment{' '}
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Meet doctor at there clinic.{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              { padding: 3, borderRadius: 5 },
              activeService == 'videoConference' ? styles.activeService : null,
            ]}>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => setActiveService('videoConference')||navigation.navigate("AppointmentVideo")}>
              <View
                style={[
                  styles.servicesIconContainer,
                  { backgroundColor: '#FBBC05', opacity: 0.2 },
                ]}>
                <Ionicons name="videocam-outline" size={30} color="#FBBC05" />
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'Mulish' }}>
                  Video Conference
                </Text>
                <Text style={{ fontSize: 10 }}>See your doctor live.</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* button */}
          <View style={styles.btnMainDiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Appointment')}>
              <LinearGradient
                colors={['#00E0C5', '#009987']}
                style={styles.btnDiv}>
                <Text style={styles.btnText}>Take an appointment</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 10
  },
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 5,
  },
  innerCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
  },
  detailsCardContainer: {
    backgroundColor: '#7ACEFA26',
    height: 55,
    width: 49,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 5,
  },
  detailsCardContainer1: {
    backgroundColor: 'rgba(249, 188, 11, 0.39)',
    height: 55,
    width: 49,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 5,
  },
  detailsCardContainer2: {
    backgroundColor: 'rgba(199, 232, 0, 0.25)',
    height: 55,
    width: 49,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 5,
  },
  appointmentBtn: {
    backgroundColor: '#00E0C5',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  servicesIconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 5,
  },
  activeService: {
    borderColor: '#00E0C5',
    borderRadius: 5,
    borderWidth: 1,
  },
  btnMainDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
