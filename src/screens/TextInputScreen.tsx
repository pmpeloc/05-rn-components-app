import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Text Inputs" />
      <TextInput style={stylesTextInput.inputStyle} />
    </View>
  );
};

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,0.3)',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
  },
});
