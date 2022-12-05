/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';

import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />;
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color="#5856d6" />
          </View>
        )}
      />
    </View>
  );
};
