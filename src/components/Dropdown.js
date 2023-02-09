import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
  const navigation = useNavigation();
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
     
     
     <View><Icon2 style={styles.icon}  size={15}  name="location" /></View> 
     
     
     <View><Text style={{color:'black'}}>{item.label}</Text></View>

    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
            
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data} 
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>


        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>


      {renderDropdown()}


      <Text style={styles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>

<TouchableOpacity onPress={() => navigation.navigate('Ifcuts')} >
      <Icon style={styles.icon}  size={20}  name="ios-search-sharp" /></TouchableOpacity>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 50,
    width:Dimensions.get('screen').width*0.88,
    justifyContent: 'space-between',
  },
  buttonText: {
    flex: 1,
    marginLeft:17,
    color:'black',
    
  },
  icon: {
    marginRight: 10,
    color:'#626262',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor:'#fff',
    width:'85%',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    marginTop:30,
    marginHorizontal:25,
    
  },
  overlay: {
    width: '100%',
    height: '100%',
   
    
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#dee1e6',
   
    
   
    
   
    
    
  },
});

export default Dropdown;