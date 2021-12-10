function Search({nav, resultChoice: [navCallBack, navLabel]}){
  const [type, setType]= React.useState("");
  const [query, setQuery]= React.useState("");

  const [promise, setPromise]= React.useState(null)
  React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);


  const [data, error]= usePromise(promise);

  return h(React.Fragment, {}
             ,h(SearchFormReact, {
                 onSearch: (type, text) => setPromise(DishSource.searchDishes({query: text, type: type})),
                 nav: nav
              })
            , promiseNoData(promise, data, error) ||
              h(SearchResultsView, {
                searchResults: data,
                dishChosen: dishID => {model.setCurrentDish(dishID);
                                      navCallBack();
                                    }
              })
         );
}
