import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from 'pages/Home';
import Levels from 'pages/Levels';
import 'styles/global.scss';

const App = () => {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/levels" exact>
            <Levels />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
