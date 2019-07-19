import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/manik.df.cse"
          target="_blank"
        >
          Manik Hosen
        </a>
      </header>
    </div>
  );
}

export default App;
