import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.image}>
        <Image style={{width: 350, height: 230}} source={item.url} />
      </View>
      {/* <View>
                <Text>Title</Text>
                <Text>Description</Text>
            </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    margin: 15,
  },
  image: {
    width: width * 0.85,
    height: height * 0.2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselItem;
