import { useEffect, useState } from 'react';
import startImage from './img/start.jpg';
import replacedImage from './img/start2.jpg';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(startImage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage(replacedImage);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      
    </div>
  );
};

export default App;