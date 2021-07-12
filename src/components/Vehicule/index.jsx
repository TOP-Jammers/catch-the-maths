import bus from 'img/vehicules/bus.gif';
import './Vehicule.scss';

const Vehicule = ({ position }) => {

  return (
    <div className="Vehicule" style={{gridTemplateColumns: `15vw ${position+1}vw 7vw 1fr 15vw`}}>
      <div className="Vehicule__empty"></div>
      <img className="Vehicule__img" src={bus} alt="pixel art rolling bus"/>
    </div> 
  );
}

export default Vehicule;
