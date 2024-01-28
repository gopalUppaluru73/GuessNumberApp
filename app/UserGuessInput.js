import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UserGuessInput = ({ userGuess, setUserGuess }) => {
  return (
    <View>
      <TextInput
        placeholder='Enter a Number'
        style={styles.input}
        keyboardType="numeric"
        value={userGuess}
        onChangeText={(text) => setUserGuess(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 50, borderColor: 'gray', borderWidth: 2, borderRadius: 8, width: '100%', padding: 10, marginBottom: 15, borderColor: '#182741', fontSize: 20 }

});

export default UserGuessInput;
