import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuItem } from '../interfaces/app.interface';
import { Spacer } from './Spacer';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem: { name, icon } }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={icon} color="gray" size={23} />
        <Text style={styles.itemText}>{name}</Text>
        <Spacer />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
