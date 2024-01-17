import React, { useEffect, useState } from 'react';


export default function Mouse() {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ left: e.pageX, top: e.pageY });
  };

  useEffect(() => {
    const mouseMoveHandler = (e) => handleMouseMove(e);

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []); 

  return (
    <div className='mouseMove' style={{ position: 'absolute', left: mousePosition.left, top: mousePosition.top }}>
    </div>
  );
}
