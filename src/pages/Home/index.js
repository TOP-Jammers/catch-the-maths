import { useHistory } from "react-router-dom";
import croco from 'img/characters/croco.png';
import croco2 from 'img/characters/croco2.png';
import elephant from 'img/characters/elephant.png';
import wolf from 'img/characters/wolf.png';
import logo from 'img/logo.png';
import './Home.scss';

const Home = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/levels");
  }

  return (
    <div className="Home">
      <img className="Home__logo" src={logo} alt="catch the maths logo"/>
      <div className="Home__characters">
        <ul className="Home__characters__left">
          <li className="Home__characters__left__card"><button><img src={croco} alt="crocodile character"/></button></li>
          <li className="Home__characters__left__card"><button><img src={croco2} alt="crocodile character"/></button></li>
        </ul>
        <ul className="Home__characters__right">
          <li className="Home__characters__right__card"><button><img src={elephant} alt="elephant character"/></button></li>
          <li className="Home__characters__right__card"><button><img src={wolf} alt="wolf character"/></button></li>
        </ul>
      </div>
      
    </div> 
  );
}

export default Home;
