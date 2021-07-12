import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useState } from 'react';
import Home from 'pages/Home';
import Levels from 'pages/Levels';
import Level from 'pages/Level';
import 'styles/global.scss';

const App = () => {
  const [character, setCharacter] = useState('');

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home character={character} setCharacter={setCharacter} />
          </Route>
          <Route path="/levels" exact>
            <Levels character={character} />
          </Route>
          <Route path="/level/:selection">
            <Level character={character} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
