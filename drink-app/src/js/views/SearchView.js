import navImg from '../../css-image/wave2.jpg';
import brandLogo from '../../css-image/brand-logo1.png';
import searchLogo from '../../css-image/search-logo.png';
import myProfileLogo from '../../css-image/my-profile-logo.png';

const SearchFormView= ({onSearch, onText, onPopular, onRandom, onLatest, ToProfile, ToFilter, ToLogin, imgUrl}) => {
    return (
      <nav>
         <img src={navImg} alt="Big wave"/>
         <img src={brandLogo} alt="Brand logo" id="brand-logo"></img>
         <label htmlFor="search-bar">
            <img src={searchLogo} alt="Search logo" id="search-logo"></img>
         </label>
         <input placeholder="Search By Name" onChange={event => onText(event.target.value)} id="search-bar"></input>
         <button onClick = {onSearch} id="search-button">Search!</button>
         <button onClick = {onPopular} >Sort by Popular</button>
         <button onClick = {onRandom}>Sort by Random</button>
         <button onClick = {onLatest}>Sort by Latest</button>
         <button onClick = {ToFilter}>Filters</button>
         <button onClick = {ToLogin} id="my-profile-button">My Profile</button>
         <img src={myProfileLogo} onClick = {ToLogin} alt="My profile logo" id="my-profile-logo"></img>
      </nav>
)}

const SearchResultView = ({searchResults, setCurrentDrink, ToDetails}) => {
   return(
     <div className="main-search">
         {
         searchResults.map(
        (drink, key) =>
        <div key = {key} className="drink-container"
            onClick = { () => {
               setCurrentDrink(drink.idDrink);
               ToDetails();
            }}>
            <img src={drink.strDrinkThumb} alt=""/>
            <h3>{drink.strDrink}</h3>
            <p><i>Instructions: </i> <br/>
               {drink.strInstructions}
            </p>
        </div>
        )
      }
      </div>
   );
};

export {SearchFormView, SearchResultView }



/*
const SearchGlassFilter = ({onClick}) => {
   return(
      <div onChange={event => onClick(event.target.value)}>
         <h3>Searching for a drink to fit in your glass?</h3>
          <input type="radio" value="Beer_pilsner" name="filter" /> Beer Glass

          <input type="radio" value="Champagne_flute" name="filter" /> Champagne Flute
          <input type="radio" value="Cocktail_glass" name="filter" /> Cocktail Glass
          <input type="radio" value="Coffee_Mug" name="filter" /> Coffee Mug
          <input type="radio" value="Collins_glass" name="filter" /> Collins Glass

          <input type="radio" value="Highball_Glass" name="filter" /> Highball Glass
          <input type="radio" value="Hurricane_glass" name="filter" /> Hurricane Glass
          <input type="radio" value="Margarita_glass" name="filter" />Margarita glass

          <input type="radio" value="Old-fashioned_glass" name="filter" /> Old-fashioned Glass
          <input type="radio" value="Pousse_cafe_glass" name="filter" />Pousse cafe glass
          <input type="radio" value="Pint_glass" name="filter" /> Pint Glass
          <input type="radio" value="Shot_glass" name="filter" /> Shot Glass

          <input type="radio" value="Whiskey_sour_glass" name="filter" /> Whiskey Glass
          <input type="radio" value="Wine_Glass" name="filter" /> Wine Glass


        </div>
   )
}


const SearchCategoryFilter = ({onClick}) => {
   return(
      <div onChange={event => onClick(event.target.value)}>
         <h3>Or just out for a regular drink or a cocktail?</h3>
          <input type="radio" value="Ordinary_Drink" name="filter" /> Ordinary Drink
          <input type="radio" value="Cocktail" name="filter" /> Cocktail
      </div>)
}

const SearchAlcoholFilter = ({onClick}) => {
   return(
      <div onChange={event => onClick(event.target.value)}>
         <h3>Or for alcoholic or alcohol free drinks?</h3>
          <input type="radio" value="Alcoholic" name="filter" /> Alocoholic
          <input type="radio" value="Non_Alcoholic" name="filter" /> Non Alcoholic

         <h3>Or use no filter at all?</h3>
          <input type="radio" value="" name="filter" /> No filter
      </div>)
}*/


// const SearchResultView = ({strDrink, strDrinkThumb, strInstructions}) => {
//    return(
//    <div>
//             <button onClick = {onPopular}>Get Most Popular Drinks!</button>
//             <button onClick = {onRandom}>Get Some Random Drinks!</button>
//             <button onClick = {ToProfile}>Back to your Profile page</button>
//     </div>
//     )}
// strDrink, strDrinkThumb, strInstructions
    




