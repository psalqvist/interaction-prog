import './../../App.css';
import navImg from '../../css-image/wave1-cut.png';
import brandLogo from '../../css-image/brand-logo1.png';
import backLogo from '../../css-image/back-logo.png';
import myProfileLogo from '../../css-image/my-profile-logo.png';

function getIngredientsFromDrink(drink) {
  var ingredients = [];
  var i;
  var ingredient;
  var measure;
  for (i = 1; i <= 15; i++) {
    ingredient = 'strIngredient' + i;
    measure = 'strMeasure' + i;
    if (drink[ingredient]) {
      ingredients = [...ingredients, [drink[ingredient], drink[measure]]];
    }
  }
  return ingredients;
}

const DetailsView = ({
    drink,
    isDrinkInDrinkList,
    ToSearch,
    drinkAdded,
    ToLogin
  }) => {
  return (
    <div>
      <nav>
         <img src={navImg} alt="Big wave"/>
         <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
         <img src={backLogo} onClick = {ToSearch} alt="Back logo" id="back-logo" />
         <button onClick={ToSearch} id="back-search">Back to Search</button>
         <button onClick={ToLogin} id="my-profile-button">My Profile</button>
         <img src={myProfileLogo} onClick={ToLogin} alt="My profile logo" id="my-profile-logo"></img>
      </nav>
      <div className = "container">
        <div>
          <button onClick={() => drinkAdded(drink)} disabled={isDrinkInDrinkList}>
            Add to drinklist
          </button>
        </div>
        <div className="details-container">
        <div className="drink-container" id = "notransform">
          <img
            className="detailsimg"
            src={drink.strDrinkThumb}
            alt=""
          />
          <h1> {drink.strDrink} </h1>
          <div information-container = "true">
            <p>Ingredients:</p>
            {getIngredientsFromDrink(drink).map((i, key) => (
              <div key={key}>
                {i[1]} of {i[0]}
              </div>
            ))}
            <p>Instructions:</p>
            {drink.strInstructions}
            <p>Glass:</p>
            {drink.strGlass}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
