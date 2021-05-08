import React from 'react'
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../Store";
import {GetPokemon} from "../action/PokemonAction";

function PokeSearch(){
    const dispatch = useDispatch()
    const [pokemonName , setPokemonName] = React.useState("");
    const pokemonState = useSelector((state: RootStore) => state.pokemon);
  
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
    const handleSubmit = () => {
      dispatch(GetPokemon(pokemonName))
    }
    console.log(pokemonState)
  
    return (
      <div className="searchContainer">
        <input className="searchBar" type="text" onChange={handleChange} />
        <button onClick={handleSubmit} className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
}

export default PokeSearch;