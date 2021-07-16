import Character from 'components/Character';
import './Walkalley.scss';

const Walkalley = ({ character, question, answerLeft, answerRight, answer }) => {

  return (
    <div className="Walkalley">
      <Character character={character} question={question} answerLeft={answerLeft} answerRight={answerRight} answer={answer} />
    </div> 
  );
}

export default Walkalley;
