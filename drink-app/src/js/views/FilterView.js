
// Image source: https://depositphotos.com/home.html?gclid=Cj0KCQiA2af-BRDzARIsAIVQUOcunUM_wm68gTcfMK7WW3qDdIF8SC-5ohX1bMy6dA4H36CVyFJYJ-4aAufQEALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=DP_EU_EN_Generic_Search&utm_term=stock%20illustration
import alcohol from "../images/alcohol.png"
import beerMug from "../images/beer-mug.png";
import champagne from "../images/champagne.png";
import cocktail from "../images/cocktail.png";
import cocktail1 from "../images/cocktail1.png";
import coffeeMug from "../images/coffee-mug.png";
import collins from "../images/collins.png";
import highball from "../images/highball.png";
import hurricane from "../images/hurricane.png";
import Margarita from "../images/margarita.png";
import noAlcohol from "../images/no-alcohol.png"
import oldFashioned from "../images/old-fashioned.png";
import pintGlass from "../images/pint-glass.png";
import shot from "../images/shot.png";
import pousse from "../images/pousse-cafe.png";
// Image source: https://www.vexels.com/png-svg/preview/157113/whiskey-sour-cocktail-flat-icon
import whiskey from "../images/whiskey.png";
import wineImg from "../images/wineglass.png";
import drink from "../images/drink1.png";
import navImg from "../../css-image/wave1-cut.png";
import brandLogo from "../../css-image/brand-logo1.png";
import backLogo from "../../css-image/back-logo.png";
import myProfileLogo from "../../css-image/my-profile-logo.png";


const FilterView = ({ToSearch, ToLogin}) => {
    return(
      <nav>
         <img src={navImg} alt="Big wave"/>
         <img src={brandLogo} alt="Brand logo" id="brand-logo-cut"></img>
         <img src={backLogo} onClick = {ToSearch} alt="Back logo" id="back-logo" />
         <button onClick={ToSearch} id="back-search">Back to Search</button>
         <button onClick = {ToLogin} id="my-profile-button">My Profile</button>
         <img src={myProfileLogo} onClick = {ToLogin} alt="My profile logo" id="my-profile-logo"></img>
      </nav>
   )
}

const SearchGlassFilter = ({onAction}) => {
  return(
     <div>
        <h2>Filter drinks for a specific glass</h2>
         <div className="filter-container">
            <img src={beerMug} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Beer_pilsner" name="filter" id="Beer_pilsner" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={champagne} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Champagne_flute" name="filter" id="Champagne_flute" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={cocktail} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Cocktail_glass" name="filter" id="Cocktail_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={coffeeMug} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Coffee_Mug" name="filter" id="Coffee_Mug" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={collins} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Collins_glass" name="filter" id="Collins_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={highball} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Highball_Glass" name="filter" id="Highball_Glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={hurricane} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Hurricane_glass" name="filter" id="Hurricane_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={Margarita} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Margarita_glass" name="filter" id="Margarita_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img src={oldFashioned} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Old-fashioned_glass" name="filter" id="Old-fashioned_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={pintGlass} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Pint_glass" name="filter" id="Pint_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={pousse} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Pousse_cafe_glass" name="filter" id="Pousse_cafe_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={shot} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Shot_glass" name="filter" id="Shot_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={whiskey} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Whiskey_sour_glass" name="filter" id="Whiskey_sour_glass" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <img  src={wineImg} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Wine_Glass" name="filter" id="Wine_Glass" className="filter-button">Select</button>
         </div>         
      </div>
  )
}

// Image source:  https://i.pinimg.com/originals/72/8a/6f/728a6fc3d0fe8afccea72ec2fc8d43ae.png
const SearchCategoryFilter = ({onAction}) => {
  return(
     <div>
        <h2>Or choose between a drink and a cocktail</h2>
         <div className="filter-container">
            <h3>Drinks</h3>
            <img  src={drink} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Ordinary_Drink" name="filter" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <h3>Cocktails</h3>
            <img src={cocktail1} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Cocktail" name="filter" className="filter-button">Select</button>
         </div>
     </div>
   )
}

// Image source: https://flyingclouddesignshop.com/wp-content/uploads/2018/12/logo-contains-alocohol-free-thumb.jpg
const SearchAlcoholFilter = ({onAction}) => {
  return(
     <div>
        <h2>Or decide between an alcohol or alcohol-free drink</h2>
         <div className="filter-container">
            <h3>Alcohol</h3>
            <img src={alcohol} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Alcoholic" name="filter" className="filter-button">Select</button>
         </div>
         <div className="filter-container">
            <h3>No Alcohol</h3>
            <img src={noAlcohol} alt="" className="drink-logo"></img>
            <button onClick={event => (onAction(event.target.value))} value="Non_Alcoholic" name="filter" className="filter-button">Select</button>
         </div>
     </div>
   )
}

/**
 *  <h3>Or use no filter at all?</h3>
         <input type="radio" value="" name="filter" /> No filter
 */

const FilterResult = ({searchResults, setCurrentDrink,  ToDetails}) => {
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
            <h1>{drink.strDrink}</h1>
            <p><i>Press for more info </i> </p>
         </div>
         )
      }
      </div>
    );
 };
export {FilterResult, FilterView, SearchAlcoholFilter, SearchCategoryFilter, SearchGlassFilter};

/*
<table>
            <tbody>
               <tr>
                  <td>
                     <img  src={beerMug} alt="" className="drink-logo"></img>
                     <input type="radio" value="Beer_pilsner" name="filter" id="Beer_pilsner"/>
                     <label htmlFor="Beer_pilsner">Beer Mug</label>
                  </td>

                  <td>
                     <img  src={champagne} alt="" className="drink-logo"></img>
                     <input type="radio" value="Champagne_flute" name="filter" id="Champagne_flute"/>
                     <label htmlFor="Champagne_flute">Champagne Flute</label>
                  </td>

                  <td>
                     <img  src={cocktail} alt="" className="drink-logo"></img>
                     <input type="radio" value="Cocktail_glass" name="filter" id="Cocktail_glass"/>
                     <label htmlFor="Cocktail_glass">Cocktail Glass</label>
                  </td>

                  <td>
                     <img  src={coffeeMug} alt="" className="drink-logo"></img>
                     <input type="radio" value="Coffee_Mug" name="filter" id="Coffee_Mug"/> 
                     <label htmlFor="Coffee_Mug">Coffee Mug</label>
                  </td>
               </tr>
               <tr>
                  <td>
                     <img  src={collins} alt="" className="drink-logo"></img>
                     <input type="radio" value="Collins_glass" name="filter" id="Collins_glass"/> 
                     <label htmlFor="Collins_glass">Collins Glass</label>
                  </td>

                  <td>
                     <img  src={highball} alt="" className="drink-logo"></img>
                     <input type="radio" value="Highball_Glass" name="filter" id="Highball_Glass"/> 
                     <label htmlFor="Highball_Glass">Highball Glass</label>
                  </td>
                  <td>
                     <img  src={hurricane} alt="" className="drink-logo"></img>
                     <input type="radio" value="Hurricane_glass" name="filter" id="Hurricane_glass"/> 
                     <label htmlFor="Hurricane_glass">Hurricane Glass</label>
                  </td>

                  <td>
                     <img  src={Margarita} alt="" className="drink-logo"></img>
                     <input type="radio" value="Margarita_glass" name="filter" id="Margarita_glass" />
                     <label htmlFor="Margarita_glass" >Margarita Glass</label>
                  </td>
               </tr>
               <tr>
                  <td>
                     <img  src={oldFashioned} alt="" className="drink-logo"></img>
                     <input type="radio" value="Old-fashioned_glass" name="filter" id="Old-fashioned_glass"/> 
                     <label htmlFor="Old-fashioned_glass">Old-Fashioned Glass</label>
                  </td>

                  <td>
                     <img  src={pintGlass} alt="" className="drink-logo"></img>
                     <input type="radio" value="Pint_glass" name="filter" id="Pint_glass"/> 
                     <label htmlFor="Pint_glass">Pint Glass</label>
                  </td>

                  <td>
                     <img  src={pousse} alt="" className="drink-logo"></img>
                     <input type="radio" value="Pousse_cafe_glass" name="filter" id="Pousse_cafe_glass"/> 
                     <label htmlFor="Pousse_cafe_glass">Pousse Cafe Glass</label>
                  </td>

                  <td>
                     <img  src={shot} alt="" className="drink-logo"></img>
                     <input type="radio" value="Shot_glass" name="filter" id="Shot_glass"/>
                     <label htmlFor="Shot_glass">Shot Glass</label>
                  </td>
               </tr>
               
               <tr>
                  <td>
                     <img  src={whiskey} alt="" className="drink-logo"></img>
                     <input type="radio" value="Whiskey_sour_glass" name="filter" id="Whiskey_sour_glass"/> 
                     <label htmlFor="Whiskey_sour_glass">Whiskey Glass</label>
                  </td>

                  <td>
                     <img  src={wineImg} alt="" className="drink-logo"></img>
                     <input  type="radio" value="Wine_Glass" name="filter" id="Wine_Glass"/>  
                     <label htmlFor="Wine_Glass">Wine Glass</label>
                  </td>
               </tr>
               <tr>
                  <h3>Or just out for a regular drink or a cocktail?</h3>
               </tr>
               <tr>
                  <td>
                     <img  src={drink} alt=""></img>
                     <input type="radio" value="Ordinary_Drink" name="filter" /> Drinks
                     <input type="radio" value="Cocktail" name="filter" /> Cocktails
                  </td>
               </tr>
               <tr>
                  <h3>Or looking for an alcoholic or alcohol free drink?</h3>
               </tr>
               <tr>
                  <td>
                     <input type="radio" value="Alcoholic" name="filter" /> Alcoholic
                     <input type="radio" value="Non_Alcoholic" name="filter" /> Non Alcoholic
                  </td>
               </tr>
            </tbody>
         </table>
*/