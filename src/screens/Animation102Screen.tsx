/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.purpleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#8586d6',
    width: 150,
    height: 150,
  },
});
