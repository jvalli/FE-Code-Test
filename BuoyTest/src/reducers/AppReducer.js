import {
  LOAD_COCKTAILS,
  SELECT_COCKTAIL
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  cocktails: [],
  selectedCocktail: null
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COCKTAILS:
      return { ...state, cocktails: action.payload };
    case SELECT_COCKTAIL:
      return { ...state, selectedCocktail: state.cocktails.find(cocktail => {
        return cocktail.idDrink === action.payload;
      }) };
    default:
      return state;
  }
};

export default AppReducer;
