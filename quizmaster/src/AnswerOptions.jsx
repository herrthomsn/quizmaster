import React from 'react';

const AnswerOptions = ({ answerOptions }) => {
  return (
    <div className="answer-options">
      {answerOptions.map((option, index) => (
        <div key={index} className="answer-option">{option}</div>
      ))}
    </div>
  );
};

export default AnswerOptions;