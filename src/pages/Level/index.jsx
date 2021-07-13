import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Roadgroup from 'components/Roadgroup';
import Vehicule from 'components/Vehicule';
import Walkalley from 'components/Walkalley';
import logo from 'img/logo.png';
import sun from 'img/decors/sun.gif';
import cloud from 'img/decors/cloud.gif';
import busStop from 'img/decors/busStop.png';
import './Level.scss';

const Level = ({ character }) => {
  const [position, setPosition] = useState(0);
  const [levelStarted, setLevelStarted] = useState(false);
  let { selection } = useParams();

  const moveForward = () => {
    setPosition(position+0.1);
  }

  const startLevel = () => {
    setLevelStarted(true);
  }

   useEffect(() => {
    if (levelStarted && position < 55) {
      setTimeout( () => moveForward(), 100);
    }
  }, [position, levelStarted]);

  return (
    <div className="Level">
      <div className="Level__sky">
        <p>level {selection}</p>
        <img className="Level__sky__logo" src={logo} alt="logo catch the maths"/>
        <img className="Level__sky__sun" src={sun} alt="pixel art sun with a face"/>
        <img className="Level__sky__cloud1" src={cloud} alt="pixel art cloud"/>
        <img className="Level__sky__cloud2" src={cloud} alt="pixel art cloud"/>
        <img className="Level__sky__cloud3" src={cloud} alt="pixel art cloud"/>
        <img className="Level__sky__busStop" src={busStop} alt="pixel art bus stop sign"/>
      </div>
      <div className="Level__road">
        <Roadgroup width={9}/>
        <Vehicule position={position}/>
      </div >
      <div className="Level__grass">
        <Walkalley character={character}/>
      </div>
      <div className="Level__explanation">
        <p>level {selection}</p>
        <button onClick={startLevel}>start</button>
        <Link to="/levels">return to level selection</Link>
      </div>
    </div> 
  );
}

export default Level;
