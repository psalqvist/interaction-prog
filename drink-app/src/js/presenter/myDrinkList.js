import {MyDrinkListView, EmptyList} from '../views/MyDrinkListView';
import useModelProp from './useModelProp';
import { ModelContext } from '../../App.js';
import React from 'react';
import { firebaseRemoveDrink } from './firebaseFunctions';
import {auth} from '../firebase';


function signOut(toSearch) {
  auth().signOut()
  .then(() => {console.log('Succesfully signed out')})
  .then(toSearch)
  .catch((error) => {
      console.log(error.message)
  });
}

function MyDrinkList({
  ToProfile: [toProfile],
  ToSearch: [toSearch],
  ToDetails: [toDetails]
}) {
  const [, setRefresh] = React.useState(null);
  const model = React.useContext(ModelContext);
  const drinks = useModelProp(model, 'drinks');
  if (model.getDrinkList().length !== 0) {
    return (
      <MyDrinkListView
        drinks={drinks}
        ToProfile={toProfile}
        ToSearch={toSearch}
        ToDetails={toDetails}
        setRefresh = {setRefresh}
        ToSignOut={() => signOut(toSearch)}
        setCurrentDrink={(drinkID) => model.setCurrentDrink(drinkID)}
        deleteDrink={(drink) => {
          model.removeFromDrinkList(drink);
          firebaseRemoveDrink(drink);
        }}
      ></MyDrinkListView>
    );
  }
  else {
    return (
      <EmptyList
        ToSearch={toSearch}
        ToSignOut={() => signOut(toSearch)}
      ></EmptyList>
    )
  }
}
export default MyDrinkList;
