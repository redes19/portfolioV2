import React, { useState, useEffect } from 'react';

export default function Bienvenue() { 
    const [displayText, setDisplayText] = useState('');
    const textToDisplay = 'Bienvenue...';
    const speed = 250; 
  
    useEffect(() => {
      let index = 0;
  
      const intervalId = setInterval(() => {
        if (index <= textToDisplay.length) {
          setDisplayText(textToDisplay.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
  
      return () => clearInterval(intervalId);
    }, []); 
  
    return (
      <div>
        <h1 style={{ fontSize: '6vh' }}>{displayText}</h1>
      </div>
    );
}
