import React from 'react';
import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Form, List, LiftingStateUp, Hooks} from './views';
import './App.css';
/* 
codingan untuk menampilkan router dan counter 
*/
function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <div>
          <Router>
            <ul>
                <li><Link to='/form'>Form</Link></li>
                <li><Link to='/list'>List</Link></li>
                <li><Link to='/liftingstateup'>Lifting State Up</Link></li>
                <li><Link to='/hooks'>Hooks</Link></li>
              </ul>
            <Switch>
              <Route path="/form">
                <Form/>
              </Route>
              <Route path="/list">
                <List numbers={numbers} />
              </Route>
              <Route path="/liftingstateup">
                <LiftingStateUp/>
              </Route>
              <Route path="/hooks">
                <Hooks/>
              </Route>
            </Switch>
          </Router>
          </div>
      </header>
    </div>

  );
}

export default App;
