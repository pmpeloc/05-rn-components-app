import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    const { name, icon, components } = menuItem;
    return (
      <View>
        <Text>
          {name} - {icon}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
