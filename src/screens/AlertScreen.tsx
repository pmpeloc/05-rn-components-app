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

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
    </View>
  );
};
