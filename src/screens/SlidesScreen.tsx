/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { items, Slide } from '../data/slideItems';
import { useAnimation } from '../hooks/useAnimation';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isVisible = useRef(false);

  const navigation = useNavigation();

  const { opacity, fadeIn } = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{ width: 350, height: 400, resizeMode: 'center' }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        itemHeight={screenHeight}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: activeIndex === 2 ? 'space-between' : 'center',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{ width: 25, borderRadius: 10, backgroundColor: '#5856d6' }}
        />
        {activeIndex === 2 && (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#5856d6',
                width: 140,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen' as never)}>
              <Text style={{ fontSize: 25, color: 'white' }}>Entrar</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subtitle: {
    fontSize: 16,
  },
});
