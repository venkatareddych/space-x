import React from 'react';
import Header from './Components/Header/Header';
import Launch from './Components/Launch/Launch';
import LaunchesList from './Components/LaunchesList/LaunchesList';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LaunchesList/>
    </div>
  );
}

export default App;
  