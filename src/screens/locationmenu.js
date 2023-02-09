import React,{ FC, useState }  from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Searchicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Dropdown from '../components/Dropdown';

const Search_location = ({navigation}) => {

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'Patia, Bhubaneswar', value: '1' },
    { label: 'Kolathia, Bhubaneswar', value: '2' },
    { label: 'Chandrasekharpur , Bhubaneswar', value: '3' },
    { label: 'Patrapada, Bhubaneswar', value: '4' },
    { label: 'Bhomikhal, Bhubaneswar', value: '5' },
  ];



  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00E0C5', '#009987']} style={{height: 300}} />

      <View style={styles.view1}>
        
        <View  style={styles.searchbarView}>

     

      <Dropdown label="Search Location" data={data} onSelect={setSelected} />
          



        </View>
      </View>


      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: Dimensions.get('window').width,
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  
  },
  search: {
    width: Dimensions.get('window').width ,
  },
  
  searchbarView:{
              
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EFF3FA',
            marginHorizontal: 20,
            marginTop: 40,
            marginBottom:10,
            borderRadius: 10,
            
            

            },
});
export default Search_location;