import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuItem } from '../interfaces/app.interface';
import { Spacer } from './Spacer';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({
  menuItem: { name, icon, component },
}: Props) => {
  const navigation = useNavigation();

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={23} />
        <Text style={{ ...styles.itemText, color: colors.text }}>{name}</Text>
        <Spacer />
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
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
