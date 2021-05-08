import {Dispatch} from "redux";
import axios from "axios";
import {PokemonDispatchTypes , POKEMON_SUCCESS , POKEMON_FAIL , POKEMON_LOADING} from "./PokemonActionTypes"
export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING
        });
        const res = await axios.get(`/api/v2/pokemon/${pokemon}`);
        dispatch({
            type: POKEMON_SUCCESS,
            payload : res.data
        });
    } catch (error) {
        dispatch({
            type: POKEMON_FAIL
        });
    }
};
