import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import Medicine from '../Components/medicine';
import Medicine2 from '../Components/medicine2';
import Medicine3 from '../Components/medicine3';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome5';

const MedicinestoredetailsOrderByShop = ({navigation}) => {
  var api = [
    {
      centername: 'Order with prescription or MRN Number',
      name: 'Upload your prescription or enter your MRN',
      name1: ' Number to get all medicines.',
      bookingtype: 'Order Now',
    },
  ];
  var bpi = [
    {
      url: require('../Assets/Image/dettolimg1.png'),
      bookingtype: 'Covid-19 ',
      bookingtype2: 'Essential',
    },
    {
      url: require('../Assets/Image/iconimg1.png'),
      bookingtype: 'Baby & Mom',
      bookingtype2: 'Care',
    },
    {
      url: require('../Assets/Image/horlicks.png'),
      bookingtype: 'Covid-19 ',
      bookingtype2: 'Essential',
    },
    {
      url: require('../Assets/Image/toothpaste.png'),
      bookingtype: 'Covid-19 ',
      bookingtype2: 'Essential',
    },
  ];

  var cpi = [
    {
      url: require('../Assets/Image/apollo.png'),
      bookingtype: 'Apollo Medicine Store',
    },
    {
      url: require('../Assets/Image/apollo2.png'),
      bookingtype: 'Apollo Medicine Store',
    },
    {
      url: require('../Assets/Image/apollo3.png'),
      bookingtype: 'Apollo Medicine Store',
    },
  ];

  return (
    <ScrollView style={styles.contrainer}>
      <View style={styles.upperdiv}>
        <View style={styles.startedbtn}>
          <Icon3
            name="left"
            style={styles.backicon1}
            onPress={() => {
              navigation.goBack();
            }}
            size={20}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Mcart')}
        style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/Image/medicinestore.png')}
        />
      </TouchableOpacity>

      <View style={styles.apolloview}>
        <View style={styles.apollo2view}>
          <View>
            <Text style={{color: '#009987', fontSize: 20, fontWeight: '900'}}>
              Apollo Medicine Store
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingTop: 5,
            }}>
            <View>
              <Icon4 name="directions" size={20} style={{color: '#009987'}} />
            </View>
            <View>
              <Text style={{fontSize: 10, color: '#009987'}}>
                Get Direction
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{color: 'black'}}>
            Nandan Vihar, Patia, Bhubaneswar,
          </Text>
        </View>

        <View style={{marginTop: 5}}>
          <Text style={{color: 'black'}}>Pincode-751024</Text>
        </View>

        <View style={styles.ratingview}>
          <View>
            <Icon2 style={styles.staricon} size={13} name="staro" />
          </View>
          <View>
            <Text style={styles.ratingnumber}>4.5(135 reviews)</Text>
          </View>
        </View>
      </View>

      <View style={styles.shopbycategory}>
        <Text style={styles.shopbycategorytext}>Shop By Category</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MedicineList')}>
        <View style={styles.king2}>
          {bpi.map(dinesh => {
            return <Medicine2 data={dinesh} />;
          })}
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.king2}>
          {bpi.map(dinesh => {
            return <Medicine2 data={dinesh} />;
          })}
        </View>
      </ScrollView>

      {/* <TouchableOpacity>
                <Text style={{marginLeft:180,marginTop:50}} onPress={() => navigation.navigate('Orderhistory')}> <Icon2 name='right' style={styles.backicon} size={35} /></Text>
            </TouchableOpacity> */}
    </ScrollView>
  );
};
export default MedicinestoredetailsOrderByShop;

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  king: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  king2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  search: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 13,
    backgroundColor: '#EFF3FA',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startedbtn: {
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: 80,
    color: 'black',
    marginLeft: 5,
    marginRight: -60,
  },

  backicon1: {
    backgroundColor: '#EFF3FA',
    borderRadius: 30,
    marginRight: 16,
    padding: 10,
    width: 43,
  },
  upperdiv: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 13,
  },
  shopbycategory: {
    paddingLeft: 15,
    marginBottom: 10,
  },
  shopbycategorytext: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
  },
  tinyLogo: {
    marginVertical: 30,
    width: Dimensions.get('screen').width * 0.93,
    borderRadius: 10,
  },
  apolloview: {
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    marginBottom: 20,
  },
  apollo2view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  ratingview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingnumber: {
    fontSize: 12,
    color: 'black',
  },
  staricon: {
    marginRight: 5,
  },
});
