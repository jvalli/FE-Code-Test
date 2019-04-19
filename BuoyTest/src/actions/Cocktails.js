import {
  LOAD_COCKTAILS,
  SELECT_COCKTAIL
} from './ActionTypes';

export const loadCocktails = (cocktails) => (dispatch) => {
  dispatch({ type: LOAD_COCKTAILS, payload: cocktails });
};

export const selectCocktail = (cocktailId) => (dispatch) => {
  dispatch({ type: SELECT_COCKTAIL, payload: cocktailId });
};
