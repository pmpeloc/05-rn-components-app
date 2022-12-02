import React from 'react';
import { View, Button, Alert } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Title',
      'This is message of the alert',
      [
        { text: 'Cancel', onPress: () => {}, style: 'destructive' },
        { text: 'Ok', onPress: () => {} },
      ],
      { cancelable: true, onDismiss: () => {} },
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      (value: string) => console.log({ value }),
      'secure-text',
      'Hello World',
      'number-pad',
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
      <Button title="Show prompt" onPress={showPrompt} />
    </View>
  );
};
