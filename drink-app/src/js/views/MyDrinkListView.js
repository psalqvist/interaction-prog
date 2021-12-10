import { FaStar } from 'react-icons/fa';
import React from 'react';
import {firebaseSetRating} from '../presenter/firebaseFunctions';
import navImg from '../../css-image/wave1-cut.png';
import brandLogo from '../../css-image/brand-logo1.png';
import backLogo from '../../css-image/back-logo.png';


function sorting(a, b) {
  return parseFloat(b.rating) - parseFloat(a.rating);
}
const StarRating = ({ array, drink, setRefresh}) => {
  const [hover, setHover] = React.useState(0);

  return (
    <div>
      {array.map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className="starbutton"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                drink.rating = ratingValue;
                firebaseSetRating(drink);
                setRefresh({});
              }}
            />
            <FaStar
              className="star"
              color={
                ratingValue <= (hover || drink.rating) ? 'orange' : '#D3D3D3'
              }
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <p>RATING: {drink.rating}</p>
    </div>
  );
};

const MyDrinkListView = ({
  ToDetails,
  ToProfile,
  ToSearch,
  drinks,
  deleteDrink,
  setCurrentDrink,
  setRefresh
}) => {
  return (
    <div>
      <nav>
        <img src={navImg} alt="Big wave"/>
        <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
        <img src={backLogo} onClick = {ToSearch} alt="Back logo" id="back-logo" />
        <button onClick={ToSearch} id="back-search">Back to Search</button>
      </nav>
      <div>
        <h1>Drink List</h1>
        <button onClick={ToSearch}>Search more drinks</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {drinks.sort(sorting).map((drink, key) => (
              <tr key={key}>
                <td
                  onClick={() => {
                    setCurrentDrink(drink.idDrink);
                    ToDetails();
                  }}
                >
                  {
                    <img
                      className="list_image"
                      src={drink.strDrinkThumb}
                      alt=""
                    />
                  }
                </td>
                <td
                  onClick={() => {
                    setCurrentDrink(drink.idDrink);
                    ToDetails();
                  }}
                >
                  {drink.strDrink}
                </td>
                <td>
                  <StarRating
                    array={[...Array(5)]}
                    drink={drink}
                    setRefresh={setRefresh}
                  />
                </td>
                <td>
                  <button onClick={() => deleteDrink(drink)}>
                    {
                      <svg
                        width="2em"
                        height="2em"
                        viewBox="0 0 16 16"
                        className="bi bi-trash-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                        />
                      </svg>
                    }
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const EmptyList = ({ToSearch, ToSignOut}) => {
  return (
    <div>
      <nav>
        <img src={navImg} alt="Big wave"/>
        <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
        <img src={backLogo} onClick = {ToSearch} alt="Back logo" id="back-logo" />
        <button onClick={ToSearch} id="back-search">Back to Search</button>
        <button onClick={ToSignOut} id="my-profile-button">Sign Out</button>
      </nav>
      <div>
        <h2>My Drink List</h2>
        <div className="empty-container">
          <p><i>Your drink list is empty</i></p>
        </div>
      </div>
    </div>
  )
}
export {MyDrinkListView, EmptyList};
