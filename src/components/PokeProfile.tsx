import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { RootStore } from "../Store";
import PokeStats from "./PokeStats";

function PokeProfile() {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  console.log(pokemonState);

  return (
    <div>
      {pokemonState.pokemon && (
        <div className="App">
          <img
            className="pokeImg"
            alt="pokemon"
            src={pokemonState.pokemon.sprites.front_default}
          ></img>
          <PokeStats></PokeStats>
        </div>
      )}
    </div>
  );
}

export default PokeProfile;
