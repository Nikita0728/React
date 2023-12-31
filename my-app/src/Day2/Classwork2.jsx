import React, { useState, useEffect } from 'react';


 const Classwork2 = () => {
    const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    setRandomNumber(Math.round(Math.random() * 100) +1);
  }, []);
  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };
  const checkGuess = () => {
    const userGuess=Number(guess);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else {
      setAttempts(attempts + 1);

      if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts + 1} attempts.`);
      } else if (userGuess < randomNumber) {
        setMessage('Try a higher number.');
      } else {
        setMessage('Try a lower number.');
      }
    }
    setGuess('');
  };

  return (
    <div>
        <h2>Guessing Game.</h2>
    <p>Guess a number between 1 and 100:</p>
    <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={checkGuess}>Check</button>
      <p>{message}</p>

    </div>

  )
};
export default Classwork2;
