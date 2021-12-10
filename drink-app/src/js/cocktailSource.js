//require('dotenv').config();
import {BASE_URL, API_KEY} from './apiConfig';

function handleHTTPError(response) {
  if (response.status === 200) return response;
  throw Error('This is the error response: ' + response.statusText);
}
const CocktailSource = {
  apiCall(params) {
    return fetch(BASE_URL + params, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
      },
    })
      .then(handleHTTPError)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  },
  searchByName({ query }) {
    if (
      query !== 'undefined' &&
      query !== '' &&
      query !== null &&
      query !== undefined
    ) {
      return this.apiCall('search.php?s=' + query)
        .then((data) => data.drinks)
        .catch((error) => console.log(error));
    } else {
      return this.getRandom();
    }
  },
  searchByIngredient({ ingredient }) {
    if (ingredient !== 'undefined' && ingredient !== '') {
      return this.apiCall('search.php?i=' + ingredient)
        .then((data) => data.drinks)
        .catch((error) => console.log(error));
    } else {
      return this.getPopular();
    }
  },
  getRandom() {
    return this.apiCall('randomselection.php')
      .then((data) => data.drinks)
      .catch((error) => console.log(error));
  },
  getPopular() {
    return this.apiCall('popular.php')
      .then((data) => data.drinks)
      .catch((error) => console.log(error));
  },
  getLatest() {
    return this.apiCall('latest.php')
      .then((data) => data.drinks)
      .catch((error) => console.log(error));
  },
  filterByGlass({ query }) {
    if (query !== 'undefined' && query !== '' && query !== null) {
      return this.apiCall('filter.php?g=' + query)
        .then((data) => data.drinks)
        .catch((error) => console.log(error));
    } else if (query === '') {
      return;
    }
  },
  filterByCategory({ query }) {
    if (query !== 'undefined' && query !== '' && query !== null) {
      return this.apiCall('filter.php?c=' + query)
        .then((data) => data.drinks)
        .catch((error) => console.log(error));
    } else if (query === '') {
      return;
    }
  },
  filterByAlcoholic({ query }) {
    if (query !== 'undefined' && query !== '' && query !== null) {
      return this.apiCall('filter.php?a=' + query)
        .then((data) => data.drinks)
        .catch((error) => console.log(error));
    } else if (query === '') {
      return;
    }
  },
  getDrinkDetails({ id }) {
    if (id !== 'undefined' && id !== '' && id !== null) {
      return this.apiCall('lookup.php?i=' + id)
        .then((data) => data.drinks[0])
        .catch((error) => console.log(error));
    } else {
      return '';
    }
  },
};

export default CocktailSource;
