/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, key: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={e => onChange(e, 'name')}
            />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={e => onChange(e, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su teléfono"
              onChangeText={e => onChange(e, 'phone')}
              keyboardType="phone-pad"
              keyboardAppearance="dark"
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,0.3)',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
