import React from 'react';
import Home from './components/Home';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Home />
    </div>
  );
}

export default App;
