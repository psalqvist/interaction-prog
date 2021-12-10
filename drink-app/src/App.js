import './App.css';
//import Sidebar from './js/presenter/sidebar'
import Search from './js/presenter/search';
import Profile from './js/presenter/profile';
import Details from './js/presenter/details';
import Show from './js/presenter/show';
import Filter from './js/presenter/filter';
import MyDrinkList from './js/presenter/myDrinkList';
import Login from './js/presenter/login';
import SignUp from './js/presenter/signUp';
import React from 'react';
import {firebaseReadData} from './js/presenter/firebaseFunctions';
import {auth} from './js/firebase';

export const ModelContext = React.createContext();

function App({ model }) {
  function defaultRoute() {
    if (
      ![
        '#Search',
        '#Profile',
        '#Details',
        '#Filter',
        '#MyDrinkList',
        '#Login',
        '#SignUp',
      ].find((knownRoute) => knownRoute === window.location.hash)
    )
      window.location.hash = '#Search';
  }
  defaultRoute();
  window.addEventListener('hashchange', defaultRoute);

  const backToSearch = [
    () => (window.location.hash = 'Search'),
    'Back to search',
  ];
  const backToProfile = [
    () => (window.location.hash = 'Profile'),
    'Back to Profile',
  ];
  const backToFilter = [
    () => (window.location.hash = 'Filter'),
    'Back to Filter',
  ];
  const drinkChoice = [
    () => (window.location.hash = 'Details'), 
    ''
  ];
  const toDrinkList = [
    () => (window.location.hash = 'MyDrinkList'),
    'toDrinkList',
  ];
  const toLoginPage = [
    () => (window.location.hash = 'Login'), 
    ''
  ];
  const toSignUpPage = [
    () => (window.location.hash = 'SignUp'),
    ''
  ];

  // Checks if there is a user logged in
	React.useEffect(() => {
		auth().onAuthStateChanged((user) => {
			if (user) {
        console.log('LOGGED IN');
        firebaseReadData({model})
      }
      else {
        console.log('NOT LOGGED IN');
        model.drinks = []
        console.log("DRINKLIST",model.getDrinkList())
			}
		});
	}, [model]);

  return (
    <ModelContext.Provider value={model}>
      <div className="App">
        <div>
          <Show hash="#Search">
            <Search
              ToProfile={backToProfile}
              ToFilter={backToFilter}
              ToDetails={drinkChoice}
              ToLogin={toLoginPage}
            />
          </Show>
          <Show hash="#Profile">
            <Profile ToSearch={backToSearch} toDrinkList={toDrinkList} />
          </Show>
          <Show hash="#Filter">
            <Filter ToSearch={backToSearch} ToDetails={drinkChoice} ToLogin={toLoginPage} />
          </Show>
          <Show hash="#Details">
            <Details ToSearch={backToSearch} ToDrinkList={toDrinkList} ToLogin={toLoginPage} />
          </Show>
          <Show hash="#MyDrinkList">
            <MyDrinkList ToProfile={backToProfile} ToSearch={backToSearch} ToDetails={drinkChoice} />
          </Show>
          <Show hash="#Login">
            <Login ToSearch={backToSearch} ToSignUp={toSignUpPage} ToDrinkList={toDrinkList} />
          </Show>
          <Show hash="#SignUp">
            <SignUp ToLogin={toLoginPage}></SignUp>
          </Show>
        </div>
      </div>
    </ModelContext.Provider>
  );
}

export default App;
