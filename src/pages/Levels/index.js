import { useHistory, Link } from "react-router-dom";
import logo from 'img/logo.png';
import './Levels.scss';

const Levels = ({ character }) => {
  let history = useHistory();

  return (
    <div className="Levels">
      <img className="Levels__logo" src={logo} alt="catch the maths logo"/>
      <p>Character selected: {character}</p>
      <Link to="/level/1">Level 1</Link>
      <Link to="/level/2">Level 2</Link>
      <Link to="/level/3">Level 3</Link>
      <Link to="/level/4">Level 4</Link>
    </div> 
  );
}

export default Levels;