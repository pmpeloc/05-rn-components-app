import React, { useState } from 'react';
import { View, RefreshControl, ScrollView, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Done');
      setRefreshing(false);
      setData('Hola mundo');
    }, 5000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856d6"
          colors={['white', 'red', 'orange']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};
