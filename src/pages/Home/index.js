import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import croco from 'img/characters/croco.png';
import croco2 from 'img/characters/croco2.png';
import elephant from 'img/characters/elephant.png';
import wolf from 'img/characters/wolf.png';
import logo from 'img/logo.png';
import confirmAudio from 'music/SFX_UIGeneric16.mp3';
import './Home.scss';

const Home = ({ character, setCharacter }) => {
  const [cardFlip, setCardFlip] = useState('');
  let history = useHistory();
  const [confirm] = useState(new Audio(confirmAudio));

  

  const flipcard = () => {
    cardFlip === '' ? setCardFlip('--flip') : setCardFlip('');
  }

  const getToLevels = () => {
    setTimeout( () => history.push('/levels'), 1000);
  }

  const handleClick = (chosenCharacter) => {
    confirm.play();
    setCharacter(chosenCharacter);
    flipcard();
    getToLevels();
  }

  return (
    <div className="Home">
      <img className="Home__logo" src={logo} alt="catch the maths logo"/>
      <div className={`Home__characters${cardFlip}`}>
        <ul className="Home__characters__left">
          <li className="Home__characters__left__card">
            <button onClick={() => handleClick('croco')}>
              <img src={croco} alt="crocodile character"/>
            </button>
          </li>
          <li className="Home__characters__left__card">
            <button onClick={() => handleClick('croco2')}>
              <img src={croco2} alt="crocodile character"/>
            </button>
          </li>
        </ul>
        <ul className="Home__characters__right">
          <li className="Home__characters__right__card">
            <button onClick={() => handleClick('elephant')}>
              <img src={elephant} alt="elephant character"/>
            </button>
          </li>
          <li className="Home__characters__right__card">
            <button onClick={() => handleClick('wolf')}>
              <img src={wolf} alt="wolf character"/>
            </button>
          </li>
        </ul>
      </div>
      <h2>Select one character</h2>
      <p>{character}</p>
    </div> 
  );
}

export default Home;
