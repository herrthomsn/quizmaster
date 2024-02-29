import React, { useState } from 'react';
import Start from './Start';
import Quiz from './Quiz';
import startImage from './img/start.jpg';
import blankImage from './img/blank.jpg';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(startImage);

  const handleImageClick = () => {
    setBackgroundImage(blankImage);
  };

  return (
    <div>
      {backgroundImage === startImage ? (
        <Start handleImageClick={handleImageClick} />
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;
