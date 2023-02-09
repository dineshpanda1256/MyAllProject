import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Mapcomp = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainview}>
      <View style={styles.consultantdiv}>
        <View style={styles.details}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            {props.data.name}
          </Text>
        </View>

        <View style={styles.medicinesdiv}>
          <View style={styles.medicinestext}>
            <Text>Montec LC 500MG</Text>
            <Text>₹ 40.00 </Text>
          </View>
          <View style={styles.medicinestext}>
            <Text>Paracetomal </Text>
            <Text>₹ 40.00 </Text>
          </View>
          <View style={styles.medicinestext}>
            <Text>Dolo-650</Text>
            <Text>₹ 40.00 </Text>
          </View>
          <View style={styles.medicinestext}>
            <Text>Glucose-D</Text>
            <Text>₹ 40.00 </Text>
          </View>
        </View>
      </View>

      <View style={styles.deliverydiv}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 7,
          }}>
          <View>
            <Text>Deliver To Sagarika Mohanty, Nandan Vihar,</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 7,
          }}>
          <View>
            <Text>Patia, Bhubaneswar, 751024</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 7,
          }}>
          <View>
            <Text>Phone Number : 7894561231</Text>
          </View>
        </View>
      </View>

      <View style={styles.trackdiv}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 7,
          }}>
          <View>
            <Text style={{color: '#009987'}}>Track Your Order</Text>
          </View>
          <View>
            <Text>
              <Icon1 name="right" style={styles.backicon} size={20} />
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.paymentsummarydiv}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
            Payment Summary
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>Total MRP</Text>
          </View>
          <View>
            <Text>₹ 1240.00 </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Total Discount</Text>
          <Text>₹ 240.00 </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>GST</Text>
          <Text>₹ 240.00 </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Shipping Fee </Text>
          <Text style={{color: '#009987', paddingRight: 20}}>FREE </Text>
        </View>
      </View>

      <View style={styles.gstdiv}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Grand Total</Text>
          <Text>₹ 1040.00 </Text>
        </View>
      </View>

      <View style={styles.confirmation}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            Are you Want to cancel the Order?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 7,
          }}>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate('Mapp')}
              style={styles.yesbutton}>
              YES
            </Text>
          </TouchableOpacity>
          <Text style={styles.nobutton}>NO</Text>
        </View>
      </View>
    </View>
  );
};
export default Mapcomp;

const styles = StyleSheet.create({
  mainview: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 20,
    borderColor: '#DFDDDD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    paddingHorizontal: 15,

    elevation: 5,
  },
  consultantdiv: {
    justifyContent: 'space-evenly',
    height: Dimensions.get('window').height * 0.25,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
    marginTop: 15,
  },
  paymentsummarydiv: {
    justifyContent: 'space-evenly',
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
    paddingLeft: 5,
  },
  gstdiv: {
    justifyContent: 'space-evenly',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
    paddingHorizontal: 5,
  },
  paymentmethoddiv: {
    justifyContent: 'space-evenly',
    height: 50,

    borderColor: '#DFDDDD',
  },

  yesbutton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 15,
    borderColor: '#009987',
    color: '#009987',
    marginRight: 10,
  },
  nobutton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 15,
    borderColor: '#EB4335',
    color: '#EB4335',
  },
  downloadprescriptiontext: {
    color: '#009987',
    borderWidth: 1,
    paddingHorizontal: 30,

    paddingVertical: 7,
    borderRadius: 5,
    borderColor: '#00E0C5',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadprescriptiondiv: {
    paddingRight: 110,
  },
  medicinestext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  medicinesdiv: {
    justifyContent: 'space-evenly',
    height: Dimensions.get('window').height * 0.15,
  },
  details: {
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
    paddingBottom: 15,
  },

  trackdiv: {
    justifyContent: 'space-evenly',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
  },
  backicon: {
    color: '#009987',
  },

  confirmation: {
    justifyContent: 'space-evenly',
    height: 100,
    paddingHorizontal: 3,

    borderColor: '#DFDDDD',
  },
  deliverydiv: {
    justifyContent: 'center',
    height: 90,
    borderBottomWidth: 1,
    borderColor: '#DFDDDD',
    paddingVertical: 20,
  },
});
