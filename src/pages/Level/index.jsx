import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Roadgroup from 'components/Roadgroup';
import Vehicule from 'components/Vehicule';
import Walkalley from 'components/Walkalley';
import logo from 'img/logo.png';
import sun from 'img/decors/sun.gif';
import cloud from 'img/decors/cloud.gif';
import busStop from 'img/decors/busStop.png';
import data from 'data/levels.json';
import rightAudio from 'music/SFX_powerUp2b.mp3';
import wrongAudio from 'music/SFX_wrong&malus5.mp3';
import successAudio from 'music/Stinger_Success2b.mp3';
import failAudio from 'music/Stinger_Fail3b.mp3';
import './Level.scss';

const Level = ({ character }) => {
  const [right] = useState(new Audio(rightAudio));
  const [wrong] = useState(new Audio(wrongAudio));
  const [success] = useState(new Audio(successAudio));
  const [fail] = useState(new Audio(failAudio));
  const { selection } = useParams();
  const [position, setPosition] = useState(0);
  const [levelStarted, setLevelStarted] = useState('intro');
  const [question, setQuestion] = useState(data[selection].data[0])
  const [answer, setAnswer] = useState({correct: 0, wrong: 0});
  const [timeLeft, setTimeLeft] = useState(data[selection].time);
  
  // makes the bus move every 100 seconds:
  const moveForward = () => {
    if(timeLeft>0) {
      setPosition(position+(3/data[selection].time));
      setTimeLeft(timeLeft-0.1)
    }
  }

  const startLevel = () => {
    setLevelStarted('on');
  }

  const newQuestion = () => {
    setQuestion(data[selection].data[Math.floor(Math.random()*9)]);
  }

  const looseGame = () => {
    setLevelStarted('lost');
  }

  const winGame = () => {
    setLevelStarted('won');
    let storedLevels = JSON.parse(localStorage.getItem('ctm-levels'));
    localStorage.setItem('ctm-levels', JSON.stringify([...storedLevels, data[selection].unlocks]));
  }

  const getWrong = () => {
    setAnswer({correct: answer.correct, wrong: answer.wrong + 1});
    if (answer.wrong < 2) {
      wrong.play();
      newQuestion();
    }
    if (answer.wrong >= 2) {
      fail.play();
      looseGame();
    }
  }

  const getRight = () => {
    if (answer.correct < 5) {
      right.play();
      setAnswer({correct: answer.correct + 1, wrong: answer.wrong});
      newQuestion();
    }
    if (answer.correct >= 5) {
      success.play();
      winGame();
    }   
  }

  const answerLeft = () => {
    question.answers[0] === question.solution ? getRight() : getWrong();
  }

  const answerRight = () => {
    question.answers[1] === question.solution ? getRight() : getWrong();
  }

  // makes the bus move every 100 seconds:
  useEffect(() => {
    if (levelStarted === 'on') {
      setTimeout( () => moveForward(), 100);
    }
  }, [position, levelStarted]);

  return (
    <div className="Level">
      <div className="Level__sky">
        <p>level {selection}</p>
        <p>time left: {timeLeft.toFixed(1)}</p>
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
        <Walkalley character={character} question={question} answerLeft={answerLeft} answerRight={answerRight} answer={answer}/>
      </div>
      <div className="Level__explanation" style={{display: `${levelStarted === 'on' ? "none" : "flex"}`}}>
        {levelStarted === 'intro' ?
          <>
            <h2 className="Level__explanation__title">{data[selection].title}</h2>
            <p className="Level__explanation__description">{data[selection].description}</p>
            <button className="Level__explanation__startBtn" onClick={startLevel}>start</button>
          </>
          :
        levelStarted === 'won' ?
          <>
            <h2 className="Level__explanation__title">You Win</h2>
            <p className="Level__explanation__description">Success! You are ready for the next level!</p>
          </>
          :
        levelStarted === 'lost' ?
          <>
            <h2 className="Level__explanation__title">Game Lost</h2>
            <p className="Level__explanation__description">You have made too many mistakes, get back to level selection and try again</p>
          </>
          :
          <>
            <h2 className="Level__explanation__title">Game Lost</h2>
            <p className="Level__explanation__description">You took too much time, get back to level selection and try again</p>
          </>
        }
        <Link to="/levels"><a className="Level__explanation__returnLink">return to level selection</a></Link>
      </div>
    </div> 
  );
}

export default Level;
