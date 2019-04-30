const axios = require('axios');
const baseUrl = "http://www.thecocktaildb.com/api/json/v1/1";

export default class AppService {
  static getCocktails(successCallback, errorCallback) {
    const endpoint = `${baseUrl}/filter.php?g=Cocktail_glass`;
    axios.get(endpoint)
    .then(function (response) {
      successCallback(response.data.drinks);
    })
    .catch(function (error) {
      errorCallback(error);
    });
  }
  static getCocktailDetails(cocktailId, successCallback, errorCallback) {
    const endpoint = `${baseUrl}/lookup.php?i=${cocktailId}`;
    axios.get(endpoint)
    .then(function (response) {
      successCallback(response.data.drinks[0]);
    })
    .catch(function (error) {
      errorCallback(error);
    });
  }
  static searchCocktails(text, successCallback, errorCallback) {
    const endpoint = `${baseUrl}/search.php?s=${text}`;
    axios.get(endpoint)
    .then(function (response) {
      successCallback(response.data.drinks);
    })
    .catch(function (error) {
      errorCallback(error);
    });
  }
}
