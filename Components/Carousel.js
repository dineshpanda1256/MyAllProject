import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('screen');
let flatList;

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => { 
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 8,
                  width: 8,
                  backgroundColor: '#000',
                  margin: 4,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default Carousel;
