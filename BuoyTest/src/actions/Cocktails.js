import {
  LOAD_COCKTAILS,
  SELECT_COCKTAIL,
  SEARCH_COCKTAIL
} from './ActionTypes';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import AppService from '../providers/app/AppService';

export const loadCocktails = (cocktails) => {
  return { type: LOAD_COCKTAILS, payload: cocktails };
};

export const selectCocktail = (cocktailId) => {
  return { type: SELECT_COCKTAIL, payload: cocktailId };
};

export const searchCocktail = (text, resolve, reject) => {
  return {
    type: SEARCH_COCKTAIL,
    payload: text,
    resolve: resolve,
    reject: reject
  };
};

function* searchCockatilAction(action) {
  yield call(AppService.searchCocktails, action.payload,
      cocktails => {
        action.resolve(cocktails);
      },
      error => {
        action.reject(error);
      });
}

export function* searchCockatilSaga() {
  yield takeEvery(SEARCH_COCKTAIL, searchCockatilAction);
}
