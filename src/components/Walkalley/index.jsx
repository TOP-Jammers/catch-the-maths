import React, { useState, useEffect } from 'react';
import Character from 'components/Character';
import './Walkalley.scss';

const Walkalley = ({ character }) => {
  const [position, setPosition] = useState(0);

  const moveForward = () => {
    if (position < 5) setPosition(position+1);
  }

  return (
    <div className="Walkalley">
      <Character character={character} position={position} moveForward={moveForward} />
    </div> 
  );
}

export default Walkalley;
