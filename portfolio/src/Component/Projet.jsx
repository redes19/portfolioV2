import React, { useState } from 'react';
import '../CSS/projet.css';

export default function Projet() {
  const [isWebVisible, setWebVisible] = useState(true);

  const toggleList = () => {
    setWebVisible(!isWebVisible);
  };

  return (
    <div>
      <div className='dev'>
        <button className={`${isWebVisible ? 'toggle-button-dev' : 'toggle-button-game'}`}
          onClick={toggleList}>
          <span className='span1'>web</span><span className='span2'>games</span>
        </button>
        <div className='web' style={{ display: isWebVisible ? 'block' : 'none' }}>
          {/* <h4>Web</h4> */}
          <div>
            <ol className='projet-list alternating-colors'>
              <li className='list-dev'><strong>Symbiot</strong></li>
              <li className='list-dev'><strong>Pokedex</strong></li>
              <li className='list-dev'><strong>Clone instant gaming</strong></li>
            </ol>
          </div>
        </div>
        <div className='games' style={{ display: isWebVisible ? 'none' : 'block' }}>
          {/* <h4>Games</h4> */}
          <div>
            <ol className='projet-list alternating-colors'>
              <li className='list-dev'><strong>RPG 2D</strong></li>
              <li className='list-dev'><strong>Tower-defence</strong></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
