const baseUrl = "http://www.thecocktaildb.com/api/json/v1/1";

export default class AppService {
  static getCocktails(successCallback, errorCallback) {
    const endpoint = `${baseUrl}/filter.php?g=Cocktail_glass`;
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then( async (responseJson) => {
      successCallback(responseJson.drinks);
    })
    .catch((error) => {
      errorCallback(error);
    });
  }
  static getCocktailDetails(cocktailId, successCallback, errorCallback) {
    const endpoint = `${baseUrl}/lookup.php?i=${cocktailId}`;
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then( async (responseJson) => {
      successCallback(responseJson.drinks[0]);
    })
    .catch((error) => {
      errorCallback(error);
    });
  }
  static searchCocktails(text, successCallback, errorCallback) {
    const endpoint = `${baseUrl}/search.php?s=${text}`;
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then( async (responseJson) => {
      successCallback(responseJson.drinks);
    })
    .catch((error) => {
      errorCallback(error);
    });
  }
}
