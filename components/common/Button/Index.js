import React from 'react';
import { Button, Alert } from 'react-native';

function Button() {
    return (
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    )
}

export default Button;
