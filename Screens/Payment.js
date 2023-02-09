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
import React from 'react';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
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
        <Text style={{fontWeight: 'bold', marginLeft: 8}}></Text>
      </View>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('PatholabDetailes')}>
        <Text
          style={{
            fontSize: 52,
            fontFamily: 'Mulish',
            fontWeight: 'bold',
            lineHeight: 65.26,
            letterSpacing: 0.5,
          }}>
          Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
