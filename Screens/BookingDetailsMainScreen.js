import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
const screen = Dimensions.get('screen');
const window = Dimensions.get('window');
import LeftIcon from 'react-native-vector-icons/AntDesign';
import Direction from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';


const BookingD = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity
        style={styles.firstrow}
        onPress={() => {
          navigation.goBack();
        }}>
        <LeftIcon name="left" size={20} color="#666" style={styles.leftIcon} />
      </TouchableOpacity>

      <View style={styles.mrnview}>
        <View>
          <Text style={styles.mrntext}>MRN NUMBER : CKARE12345ABCD#123</Text>
        </View>
      </View>

      <View style={styles.appointmentview}>
        <View style={styles.appointmentextview}>
          <Text style={styles.appointmenttext}>Appointment detailes</Text>
        </View>

        <View style={styles.secondview}>
          <View style={styles.nameview}>
            <Text style={styles.nameviewtext}>SAGARIKA MOHANTY (F - 37)</Text>
          </View>

          <View>
            <View>
              <Text style={styles.mailviewtext}>sagarika@gmail.com</Text>
            </View>
            <View>
              <Text style={styles.mailviewtext}>7894562371</Text>
            </View>
          </View>
        </View>

        <View style={styles.ThirdView}>
        <View style={styles.nameview}>
            <Text style={styles.nameviewtext}>
              Slot Booked: 27th Jan 2021, Monday, 09.30AM-11.30AM
            </Text>
          </View>

          <View style={styles.slotbookview}>
            <View>
            
              <Text style={styles.mailviewtext}>Sag Clinc,</Text>
              <Text style={styles.mailviewtext}>
                Near Bigbazar,Patia, INFO City Road,Bhubaneswar,
              </Text>
              <Text style={styles.mailviewtext}>Pin - 745321</Text>
            </View>
            <View style={styles.directioniconview}>
              <View>
                <Direction
                  name="directions"
                  size={20}
                  style={styles.directionicon}
                />
              </View>
              <View>
                <Text style={styles.directtext}>Get Direction</Text>
              </View>
            </View>
          </View>

          <View style={styles.doctorview}>
            <Text style={styles.doctortext}>Doctor : Dr. Sagarika</Text>
          </View>
        </View>


        <View style={styles.Fourthview}>
            <View style={styles.paymentview}><Text style={styles.paymenttext}>Payment Summary</Text></View>
           
            <View style={styles.totalmrpview}>
            <View>
                <View style={styles.amounttextview}><Text style={styles.amountext}>Total Discount</Text></View>            
                <View style={styles.amounttextview}><Text style={styles.amountext}>Total MRP</Text></View>
                <View style={styles.amounttextview}><Text style={styles.amountext}>GST</Text></View>
            </View>
            <View>
                <View style={styles.amounttextview}><Text style={styles.amountext}>₹ 1240.00</Text></View>
                <View style={styles.amounttextview}><Text style={styles.amountext}>₹ 240.00</Text></View>            
                <View style={styles.amounttextview}><Text style={styles.amountext}>₹ 40.00</Text></View>
            </View>
            </View>

        </View>

        <View style={styles.Fivthview}>

        <View style={styles.totalmrpview}>
            <View>
                <View><Text style={styles.amountext}>Grand Total</Text></View>  
            </View>
            <View>
                <View><Text style={styles.amountext}>₹ 1040.00</Text></View>
            </View>
            </View>

        
            </View>

        </View>

        {/* button start  */}
      <View style={styles.mainview}>
        <View style={styles.detailsview}>
          <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
            <LinearGradient
              colors={['#00E0C5', '#009987']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Thank You</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      {/* button end  */}






    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    marginTop:20,
  },
  leftIcon: {
    backgroundColor: '#EFF3FA',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 30,
  },
  mrnview: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    paddingLeft: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  mrntext: {
    color: '#009987',
  },
  appointmentview: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  appointmenttext: {
    color: '#222222',
    fontSize: 14,
  },
  appointmentextview: {
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    paddingTop: 13,
    paddingBottom: 7,
  },
  secondview: {
    justifyContent: 'space-between',
    borderColor: '#E7E7E7',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  nameview: {
    marginVertical: 6,
  },
  nameviewtext: {
    color: '#292A2E',
    fontSize: 12,
  },
  mailviewtext: {
    fontSize: 11,
  },
  ThirdView:{
    justifyContent: 'space-between',
    borderColor: '#E7E7E7',
    borderBottomWidth: 1,
    paddingVertical: 10,
    // backgroundColor:'green',
  },
  slotbookview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  directioniconview: {
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems: 'center',
    
  },
  directionicon: {
    color: '#01B8A1',
    marginVertical:5,
  },
  directtext: {
    color: '#01B8A1',
    fontSize: 8,
  },
  doctortext: {
    fontSize: 11,
  },
  doctorview: {
    marginTop: 5,
    marginBottom: 5,
  },
  totalmrpview:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:5,

  },
  Fourthview:{
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderColor:'#E7E7E7',
  },
  Fivthview:{
    paddingHorizontal:10,
    paddingTop:15,
    paddingBottom:10,
  },    
  amountext:{
        fontSize:12,
  },
  amounttextview:{
        marginBottom:5,
  },
  paymentview:{
        marginBottom:13,
        marginTop:22,
      },
      paymenttext:{
            fontWeight:'500',
            color:'black',
      },
      mainview: {
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
      },
      linearGradient: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        width: Dimensions.get('window').width * 0.8,
      },
      buttonText: {
        fontSize: 18,
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        // margin: 10,
        color: 'white',
        marginVertical: 10,
        backgroundColor: 'transparent',
        paddingVertical: 2,
      },
     
  
});

export default BookingD;