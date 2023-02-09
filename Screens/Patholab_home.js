import * as React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Patholab_home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <View>
          <Image
            style={styles.bicon}
            source={require('../Assets/Image/backicon2.png')}
          />
        </View>
        <View>
          <Text style={styles.heading}>Patholabs</Text>
        </View>
      </View>
      <Text style={styles.location}>Patia, Bhubaneswar</Text>
      <View style={styles.search}>
        <TextInput placeholder="Search Patholabs"></TextInput>
        <Image
          style={styles.img1}
          source={require('../Assets/Image/search.png')}
        />
      </View>
      <View style={styles.Row}>
        <TouchableOpacity
          style={styles.row1}
          onPress={() => navigation.navigate('PatholabDetailes')}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab1.png')} style={styles.img} />
          </View>
        </TouchableOpacity>
        <View style={styles.row2}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab2.png')} style={styles.img} />
          </View>
        </View>
      </View>
      <View style={styles.Row1}>
        <View style={styles.row1}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab1.png')} style={styles.img} />
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab2.png')} style={styles.img} />
          </View>
        </View>
      </View>
      <View style={styles.Row2}>
        <View style={styles.row1}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab1.png')} style={styles.img} />
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.img2}>
            <Image source={require('../Assets/Image/Patholab2.png')} style={styles.img} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  div1: {
    flexDirection: 'row',
    marginTop: 15,
  },
  img2: {
    alignItems: 'center',
  },
  row1: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.45,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  row2: {
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.45,
    marginLeft: 10,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  img: {
    width: 150,
    height: 140,
    margin: 10
  },

  Row: {
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  Row1: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 8,
  },
  Row2: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EFF3FA',
    borderRadius: 15,
    backgroundColor: '#EFF3FA',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.925,
  },
  img1: {
    height: 22,
  },
  heading: {
    marginHorizontal: 10,
    marginVertical: 15,
    color: 'black',
    fontSize: 15,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  location: {
    marginLeft: 15,
    marginVertical: 18,
    color: '#009987',
  },
});

export default Patholab_home;
