import road from 'img/decors/road.png';
import './Roadgroup.scss';

const Roadline = (props) => {
  const roadblock = <img className="Roadgroup__list__item__img" src={road} alt="piece of road"/>;
  let roadArr = Array.from(Array(props.width), (_, i) => <li className="Roadgroup__list__item" key={i+1}>{roadblock}</li>);
  return <ul className="Roadgroup__list">{roadArr}</ul>;
}

const Roadgroup = ({ position, width }) => {

  return (
    <div className="Roadgroup">
      <Roadline width={width} />
    </div> 
  );
}

export default Roadgroup;
