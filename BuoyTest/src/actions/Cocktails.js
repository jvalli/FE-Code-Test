import {
  LOAD_COCKTAILS,
  SELECT_COCKTAIL
} from './ActionTypes';

export const loadCocktails = (cocktails) => {
  return { type: LOAD_COCKTAILS, payload: cocktails };
};

export const selectCocktail = (cocktailId) => {
  return { type: SELECT_COCKTAIL, payload: cocktailId };
};
