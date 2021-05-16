import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Logbook from './components/Logbook';
import CreateWorkout from './components/CreateWorkout';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/logbook'>
            <Logbook />
          </Route>
          <Route path='/workout/create'>
            <CreateWorkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
