import React, { useEffect, useState } from 'react';
import startImage from './img/start.jpg';
import replacedImage from './img/start2.jpg';

const Start = ({ handleImageClick }) => {
  const [currentImage, setCurrentImage] = useState(startImage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(replacedImage);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        width: '130vh',
        height: '100vh',
        cursor: 'pointer',
      }}
      onClick={handleImageClick}
    />
  );
};

export default Start;
