import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useDraggable } from '../hooks/useDraggable';

export const Animation102Screen = () => {
  const { pan, panResponder } = useDraggable();

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          ...styles.box,
          transform: [
            { translateX: pan.getLayout().left },
            { translateY: pan.getLayout().top },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#75cedb',
    width: 150,
    height: 150,
    borderRadius: 4,
  },
});
