import React, { useState, useEffect } from 'react';
import Character from 'components/Character';
import './Walkalley.scss';

const Walkalley = ({ character }) => {
  const [position, setPosition] = useState(0);

  const moveForward = () => {
    setPosition(position+1);
  }

  useEffect(() => {
    if (position < 4) {
      moveForward();
    }
  }, [position]);

  return (
    <div className="Walkalley">
      <Character character={character} position={position}/>
    </div> 
  );
}

export default Walkalley;
