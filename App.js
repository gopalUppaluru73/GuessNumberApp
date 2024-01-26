import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import UserGuessInput from './app/UserGuessInput';

const App = () => {
  const [hiddenNumber, setHiddenNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  const handleCheckGuess = () => {
    const userGuessNumber = parseInt(userGuess);

    if (isNaN(userGuessNumber)) {
      setMessage('Please enter a valid number.');
    } else {
      if (userGuessNumber === hiddenNumber) {
        setMessage('Congratulations! You have guessed it right.');
        setHiddenNumber(generateRandomNumber());
      } else if (userGuessNumber < hiddenNumber) {
        setMessage('The hidden number is higher than your guess.');
      } else {
        setMessage('The hidden number is lower than your guess.');
      }
    }
  };

  const handlePlayAgain = () => {
    setHiddenNumber(generateRandomNumber());
    setUserGuess('');
    setMessage('');
  };

  return (
    <View>
      <UserGuessInput userGuess={userGuess} setUserGuess={setUserGuess} />
      <Button title="Check My Guess" onPress={handleCheckGuess} />
      <Text>{message}</Text>
      {message.includes('Congratulations') && (
        <Button title="Play Again" onPress={handlePlayAgain} />
      )}
    </View>
  );
};

export default App;
