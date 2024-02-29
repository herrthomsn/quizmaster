import React from 'react';

const InputForm = ({ userInput, setUserInput }) => {
  return (
    <input
      className="input-field"
      type="text"
      placeholder="Your Answer..."
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};

export default InputForm;