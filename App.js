import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import UserGuessInput from './app/UserGuessInput';

const App = () => {
  const [hiddenNumber, setHiddenNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [greetMsg, setGreetMsg] = useState('')
  function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  const handleCheckGuess = () => {
    const userGuessNumber = parseInt(userGuess);

    if (isNaN(userGuessNumber)) {
      setMessage('Please enter a valid number.');
    } else {
      if (userGuessNumber === hiddenNumber) {
        setGreetMsg('Congratulations!!!')
        setMessage('You have guessed it right.');
        setHiddenNumber(generateRandomNumber());
      } else if (userGuessNumber < hiddenNumber) {
        setGreetMsg('Try Again!!!')
        setMessage('The hidden number is higher than your guess.');
      } else {
        setGreetMsg('Try Again!!!')
        setMessage('The hidden number is lower than your guess.');
      }
    }
  };

  const handlePlayAgain = () => {
    setHiddenNumber(generateRandomNumber());
    setUserGuess('');
    setMessage('');
    setGreetMsg('')
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <UserGuessInput userGuess={userGuess} setUserGuess={setUserGuess} />
        <View style={styles.btnstyles}>
          <Button title="Check My Guess" onPress={handleCheckGuess} color='#fff' />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.text}>{greetMsg}</Text>
          <Text style={styles.text}>{message}</Text>
          {greetMsg == 'Congratulations!!!' && (
            <View style={styles.btnstyles}>
                <Button title="Play Again..." onPress={handlePlayAgain} color='#fff'/>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: 400,
    borderWidth: 2,
    borderColor: '#182741',
    margin: 30
  },
  text: {
    textAlign:'center',
    marginTop: 15,
    fontSize: 20
  },
  btnstyles: {
    width: "100%",
    height: 60,
    backgroundColor: '#4a73c4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 16
  }

});

export default App;
