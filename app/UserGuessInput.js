import React from 'react';
import { View, Text, TextInput } from 'react-native';

const UserGuessInput = ({ userGuess, setUserGuess }) => {
  return (
    <View style={{margin: 120}}>
      <Text>Enter a Number</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        value={userGuess}
        onChangeText={(text) => setUserGuess(text)}
      />
    </View>
  );
};

export default UserGuessInput;
