import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from 'img/logo.png';
import confirmAudio from 'music/SFX_UIGeneric16.mp3';
import data from 'data/levels.json';
import './Levels.scss';

const Levels = ({ character }) => {
  const [confirm] = useState(new Audio(confirmAudio));
  const [levels, setLevels] = useState(["a1.1"]);

  // play confirmation sound
  const playConfirm = () => {
    confirm.play();
  }

  // access level one at first play
  useEffect(() => {
    if(localStorage.getItem('ctm-levels') === null) {
      localStorage.setItem('ctm-levels', JSON.stringify(["a1.1"]))
    } else {
      setLevels(JSON.parse(localStorage.getItem('ctm-levels')));
    }
  }, []);

  return (
    <div className="Levels">
      <img className="Levels__logo" src={logo} alt="catch the maths logo"/>
      <p>Character selected: {character}</p>
      <ul className="Levels__list">{levels && levels.map(level => <li key={level}><Link onClick={playConfirm} to={`/level/${level}`}>{data[level].title}</Link></li>)}</ul>
    </div> 
  );
}

export default Levels;
