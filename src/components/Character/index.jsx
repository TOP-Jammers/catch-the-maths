import React, { useState, useEffect } from 'react';

import './Character.scss';

const Character = ({ character, question, answerLeft, answerRight, answer }) => {

  return (
    <div className="Character" style={{paddingTop: `${40 - answer.correct*7.9}vh`}}>
      <div className="Character__container">
        <img 
          className="Character__container__img" 
          src={require(`img/characters/${character}.png`).default} 
          alt={`${character} pixel art charcter`}
          style={{height: `${15 - answer.correct*1.4}vh`}}
        />
      </div>
      <div className="Character__bubbles">
        <div className="Character__bubbles__question">
          <p>{question.question}=?</p>
        </div>
        <div className="Character__bubbles__bigBubble" />
        <div className="Character__bubbles__smallBubble" />
        <div className="Character__bubbles__answers">
          <button className="Character__bubbles__answers__left" onClick={answerLeft}>{question.answers[0]}</button>
          <button className="Character__bubbles__answers__right" onClick={answerRight}>{question.answers[1]}</button>
        </div>
      </div>
    </div> 
  );
}

export default Character;
