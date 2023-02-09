import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon01 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile_edit = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container1}>
        <Icon01 name="left" size={14} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editview}>
        <Text style={styles.edit}>EDIT</Text>
      </TouchableOpacity>

      <View style={styles.view1}>
        <View style={styles.profilview}>
          <Image
            style={styles.profilepic}
            source={require('../Assets/Image/Profile.png')}></Image>
        </View>
        <Text style={styles.profilename}>Deepali Samal</Text>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Icon name="mail" size={20} color={'#000'} />
            <Text>Deepalisamal@gmail.com</Text>
          </View>
          <View style={styles.view3}>
            <Icon1 name="calendar" size={20} color={'#000'} />
            <Text>01.03.1999</Text>
          </View>
          <View style={styles.view3}>
            <Icon1 name="smartphone" size={20} color={'#000'} />
            <Text>+91 7894561234</Text>
          </View>
          <View style={styles.view3}>
            <Icon2 name="text-document" size={20} color={'#000'} />
            <Text>1234 5678 9101 </Text>
          </View>
          <View style={styles.view3}>
            <Icon3 name="home-city-outline" size={20} color={'#000'} />
            <Text>Address</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009987',
  },
  container1: {
    borderRadius: 30,
    backgroundColor: '#EFF3FA',
    height: 30,
    width: 30,
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    color: 'white',
  },
  editview: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
    marginTop: -50,
  },
  view1: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 130,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  profilview: {
    position: 'absolute',
    left: '40%',
    top: -50,
  },
  profilepic: {
    borderRadius: 100,
    backgroundColor: 'black',
    height: 90,
    width: 90,
  },
  profilename: {
    fontWeight: 'bold',
    position: 'absolute',
    left: '35%',
    top: 60,
    fontSize: 20,
  },
  viwe2: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginRight: 10,
  },
  view3: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: 50,
  },
});
export default Profile_edit;
