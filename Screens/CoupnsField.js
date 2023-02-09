import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LeftIcon from 'react-native-vector-icons/AntDesign';
import RightIcon from 'react-native-vector-icons/AntDesign';
import CopyIcon from 'react-native-vector-icons/FontAwesome5';
import DotIcon from 'react-native-vector-icons/Entypo';
import Unorderedlist from 'react-native-unordered-list';

const Membership = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.firstrow}
          onPress={() => {
            navigation.goBack();
          }}>
          <LeftIcon
            name="left"
            size={20}
            color="#666"
            style={styles.leftIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchBoxContainer}>
          {/* look here first one is icon then input box and then again icon */}
          <TextInput
            style={styles.searchInputText}
            placeholder="Enter Coupnon Code"></TextInput>
          <Text style={[styles.couponText, {color: '#009987'}]}>Apply</Text>
        </View>
        <View>
          <Text style={styles.couponText1}>Available Coupons</Text>
        </View>

        <View style={styles.couponOrderInnerContainer}>
          <View>
            <Text style={styles.couponOrderInnerContainerCkareText}>CKare</Text>
            <Text style={styles.couponOrderInnerContainerFlatText}>
              Flat 20% OFF
            </Text>
            <Text style={styles.couponOrderInnerContainerWorthText}>
              Valid on total value of items worth ₹550 or more.
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddressAndPayment4')}
              style={styles.couponOrderInnerContainerSaveMoreText}>
              <Text style={{color: '#26A69A', zIndex: 1}}>SAVEMORE</Text>
            </TouchableOpacity>
            <View style={{marginRight: 10}}>
              <Text style={{color: '#009987'}}>Applied</Text>
            </View>
          </View>
          <View style={{marginLeft: 10}}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}>
                {' '}
                Applicable only on select medicine store.
              </Text>
            </Unorderedlist>

            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}>
                {' '}
                Applicable maximum 3 times in a day.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}> Other T&Cs may apply.</Text>
            </Unorderedlist>
          </View>
        </View>

        <View style={styles.couponOrderInnerContainer}>
          <View>
            <Text style={styles.couponOrderInnerContainerCkareText}>CKare</Text>
            <Text style={styles.couponOrderInnerContainerFlatText}>
              Flat 20% OFF
            </Text>
            <Text style={styles.couponOrderInnerContainerWorthText}>
              Valid on total value of items worth ₹550 or more.
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TouchableOpacity
              style={styles.couponOrderInnerContainerSaveMoreText}>
              <Text style={{color: '#26A69A', zIndex: 1}}>TRYMORE</Text>
            </TouchableOpacity>
            <View style={{marginRight: 10}}>
              <Text>Apply</Text>
            </View>
          </View>
          <View style={{marginLeft: 10}}>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}>
                {' '}
                Applicable only on select medicine store.
              </Text>
            </Unorderedlist>

            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}>
                {' '}
                Applicable maximum 3 times in a day.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={{fontSize: 12}}> Other T&Cs may apply.</Text>
            </Unorderedlist>
          </View>
        </View>
        <View style={{height: Dimensions.get('screen').height * 0.05}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    //paddingTop: 12,
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop: 12,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 30,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: '#EFF3FA',
    borderRadius: 5,
  },
  couponText: {
    fontSize: 12,
    fontFamily: 'Mulish',
    lineHeight: 15.06,
    letterSpacing: 0.9,
    //marginLeft: 20,
    //marginTop: 5,
    fontWeight: 'bold',
  },
  searchInputText: {
    marginRight: 'auto',
    //marginLeft: 5,
    fontFamily: 'Mulish',
  },
  couponText1: {
    fontSize: 12,
    fontFamily: 'Mulish',
    lineHeight: 15.06,
    letterSpacing: 0.9,
    marginLeft: 10,
    marginTop: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  couponOrderInnerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: '#e1e1e1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#DFDDDD',
    borderBottomWidth: 0.9,
    marginVertical: 7,
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#00E0C5',
  },
  couponOrderInnerContainerCkareText: {
    fontSize: 20,
    marginLeft: 12,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    lineHeight: 25.1,
    letterSpacing: 0.9,
  },
  couponOrderInnerContainerFlatText: {
    fontSize: 12,
    marginLeft: 12,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    lineHeight: 25.1,
    letterSpacing: 0.9,
  },
  couponOrderInnerContainerWorthText: {
    fontSize: 11,
    marginLeft: 12,
    fontFamily: 'Mulish',
    lineHeight: 12,
    letterSpacing: 0.1,
  },
  couponOrderInnerContainerSaveMoreText: {
    backgroundColor: 'rgba(0, 153, 135, 0.22)',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    borderStyle: 'dashed',
    borderColor: '#00E0C5',
    borderWidth: 2,
    // opacity: 0.2,
  },
});
export default Membership;
