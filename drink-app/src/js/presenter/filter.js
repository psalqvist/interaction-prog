import {FilterView} from '../views/FilterView';
import React from 'react';
import cocktail from '../cocktailSource';
import promiseNoData from './promiseNoData';
import usePromise from './usePromise';
import {FilterResult, SearchGlassFilter, SearchCategoryFilter, SearchAlcoholFilter} from '../views/FilterView';
import CocktailSource from '../cocktailSource'
import {ModelContext} from '../../App.js'

function Filter ({ToSearch:[toSearch], ToDetails: [toDetails], ToLogin: [toLogin]}) {
    const model = React.useContext(ModelContext);
    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);

	React.useEffect(() => {
        setPromise(cocktail.getPopular())
    }, []);

    return(
        <React.Fragment>
            <FilterView ToSearch = {toSearch} ToLogin = {toLogin}/>

            <SearchGlassFilter
                onAction = {x => {setPromise(CocktailSource.filterByGlass({query: x}))}}>
            </SearchGlassFilter>
            <SearchCategoryFilter
                onAction = {x => {setPromise(CocktailSource.filterByCategory({query: x}))}}>
            </SearchCategoryFilter>

            <SearchAlcoholFilter
                onAction = {x => {setPromise(CocktailSource.filterByAlcoholic({query: x}))}}>
            </SearchAlcoholFilter>

            {promiseNoData(promise, data, error) ||
                <FilterResult
                    //key = {drink.strDrink}
                    //strDrink= {drink.strDrink}
                    //strDrinkThumb = {drink.strDrinkThumb}
                    //strInstructions = {drink.strInstructions}
                    searchResults = {data}
                    setCurrentDrink = {drinkID => model.setCurrentDrink(drinkID)}
                    ToDetails = {toDetails}
                />
            }
        </React.Fragment>
        );
    };

    export default Filter
