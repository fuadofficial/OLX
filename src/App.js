import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Singup from './Pages/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/singup'>
          <Singup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
