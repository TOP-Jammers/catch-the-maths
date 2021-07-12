import React, { useState, useEffect } from 'react';

import './Character.scss';

const Character = ({ character, position, moveForward }) => {

  return (
    <div className="Character" style={{paddingTop: `${40 - position*7.5}vh`}}>
      <div className="Character__question">
        <p>1 + 1 = ?</p>
        <button onClick={moveForward}>Move</button>
      </div>
      <div className="Character__bigBubble" />
      <div className="Character__smallBubble" />
      <img 
        className="Character__img" 
        src={require(`img/characters/${character}.png`).default} 
        alt={`${character} pixel art charcter`}
        style={{height: `${15 - position}vh`}}
      />
    </div> 
  );
}

export default Character;
