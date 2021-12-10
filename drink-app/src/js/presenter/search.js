import usePromise from './usePromise';
import { SearchFormView, SearchResultView } from '../views/SearchView'; // , SearchGlassFilter, SearchCategoryFilter, SearchAlcoholFilter
import React from 'react';
import promiseNoData from './promiseNoData';
import CocktailSource from '../cocktailSource';
import { ModelContext } from '../../App';

function Search({
  ToProfile: [toProfile],
  ToDetails: [toDetails],
  ToFilter: [toFilter],
  ToLogin: [toLogin],
}) {
  const model = React.useContext(ModelContext);
  const [promise, setPromise] = React.useState(null);
  const [data, error] = usePromise(promise);

  React.useEffect(() => {
    setPromise(CocktailSource.getRandom());
  }, []);

  let x = null;
  return (
    <React.Fragment>
      <SearchFormView
        onText={(text) => (x = text)}
        onSearch={() => {setPromise(CocktailSource.searchByName({ query: x }));}}
        ToFilter={toFilter}
        ToProfile={toProfile}
        ToLogin={toLogin}
        onPopular={(onPopular) => setPromise(CocktailSource.getPopular(onPopular))}
        onRandom={(onRandom) => setPromise(CocktailSource.getRandom(onRandom))}
        onLatest={(onLatest) => setPromise(CocktailSource.getLatest(onLatest))}
      />

      {promiseNoData(promise, data, error) || (
        <SearchResultView
          searchResults={data}
          setCurrentDrink={(drinkID) => model.setCurrentDrink(drinkID)}
          ToDetails={toDetails}
        />
      )}
    </React.Fragment>
  );
}

export default Search;
