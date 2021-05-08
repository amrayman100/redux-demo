import React from 'react'
import '../App.css';
import {useSelector} from "react-redux";
import {selectAllStats, selectPrimaryPower} from '../selectors/PokemonSelector';

function PokeStats(){ 
    const pokemonStats = useSelector(selectAllStats);
    const pokemonPower = useSelector(selectPrimaryPower);
    console.log(pokemonStats)
    return (
      <div className="App">
        <h1>Power: {pokemonPower}</h1>
      </div>
    );
}

export default PokeStats;