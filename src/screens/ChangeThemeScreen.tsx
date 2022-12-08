/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Themes" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
