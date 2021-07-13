import React, { useState, useEffect } from 'react';

import './Character.scss';

const Character = ({ character, position, moveForward }) => {

  return (
    <div className="Character" style={{paddingTop: `${40 - position*7.9}vh`}}>
      <div className="Character__container">
        <img 
          className="Character__container__img" 
          src={require(`img/characters/${character}.png`).default} 
          alt={`${character} pixel art charcter`}
          style={{height: `${15 - position}vh`}}
        />
      </div>
      <div className="Character__bubbles">
        <div className="Character__bubbles__question">
          <p>1 + 1 = ?</p>
          <button onClick={moveForward}>Move</button>
        </div>
        <div className="Character__bubbles__bigBubble" />
        <div className="Character__bubbles__smallBubble" />
      </div>
    </div> 
  );
}

export default Character;
