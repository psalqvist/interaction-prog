import usePromise from './usePromise';
import promiseNoData from './promiseNoData';
import CocktailSource from '../cocktailSource';
import React from 'react';
import DetailsView from '../views/detailsView';
import useModelProp from '../useModelProp';
import {ModelContext} from '../../App';
import {firebaseAddDrink} from './firebaseFunctions';
import firebase from 'firebase';

function Details({ ToSearch: [toSearch], ToDrinkList: [toDrinkList], ToLogin: [toLogin] }) {
  const model = React.useContext(ModelContext);
  const drinkMeny = useModelProp(model, 'drinks');
  const currentDrink = useModelProp(model, 'currentDrink');

  const [promise, setPromise] = React.useState(null);

  React.useEffect(
    () =>
      setPromise(
        currentDrink && CocktailSource.getDrinkDetails({ id: currentDrink })
      ),
    [currentDrink, model]
  );

  const [data, error] = usePromise(promise);

  return (
    promiseNoData(promise, data, error) || (
      <DetailsView
        drink={data}
        isDrinkInDrinkList={drinkMeny.find((e) => e.idDrink === currentDrink)}
        ToSearch={toSearch}
        ToLogin={toLogin}
        drinkAdded={(drink) => {
          if (firebase.auth().currentUser) {
            model.addToDrinkList(drink);
            firebaseAddDrink(drink)
            toDrinkList();
          }
          else {
            console.log("U have to log in")
          }
        }}
      />
    )
  );
}

export default Details;
