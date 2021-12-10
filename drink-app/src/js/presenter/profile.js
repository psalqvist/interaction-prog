import { ProfileView, ProfileResult } from '../views/ProfileView';
import React from 'react';
import cocktail from '../cocktailSource';
import promiseNoData from './promiseNoData';
import usePromise from './usePromise';

function Profile({ ToSearch: [toSearch], toDrinkList: [toDrinkList] }) {
  const [promise, setPromise] = React.useState(null);
  const [data, error] = usePromise(promise);

  React.useEffect(() => {
    setPromise(cocktail.getPopular());
  }, []);

  return (
    <div>
      <ProfileView ToSearch={toSearch} toDrinkList={toDrinkList} />

      {promiseNoData(promise, data, error) ||
        data.map((drink) => (
          <ProfileResult
            key={drink.strDrink}
            strDrink={drink.strDrink}
            strDrinkThumb={drink.strDrinkThumb}
            strInstructions={drink.strInstructions}
          />
        ))}
    </div>
  );
}
export default Profile;
