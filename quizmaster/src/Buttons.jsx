import React from 'react';

const Buttons = ({ handleSubmit, handleNextClick, nextDisabled, handleShowAnswer }) => {
  return (
    <div>
      <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
      <button className="next-button" type="button" onClick={handleNextClick} disabled={nextDisabled}>Next</button>
      <button className="show-answer-button" onClick={handleShowAnswer}>Show Answer</button>
    </div>
  );
};

export default Buttons;