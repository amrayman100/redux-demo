import { createSelector } from "reselect";
import {RootStore} from "../Store";

const selectAblities = (state : RootStore) => state.pokemon.pokemon?.stats;

export const selectAllStats = createSelector(
    selectAblities,
  ablities => ablities
);

export const selectPrimaryPower = createSelector(
    selectAblities ,
  ablities => ablities && ablities[0].base_stat
);