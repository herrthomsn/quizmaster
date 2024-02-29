import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div className={`feedback ${feedback === 'Right' ? 'feedback-right' : 'feedback-wrong'}`}>
      {feedback}
    </div>
  );
};

export default Feedback;