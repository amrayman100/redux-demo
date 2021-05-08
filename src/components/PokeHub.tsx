import React from 'react'
import '../App.css';
import PokeSearch from'./PokeSearch'
import PokeProfile from './PokeProfile';

function PokeHub() {
  return (
    <div className="App">
      <h1>Pokemon Archive</h1>
      <PokeSearch></PokeSearch>
      <PokeProfile></PokeProfile>
    </div>
  );
}

export default PokeHub;
