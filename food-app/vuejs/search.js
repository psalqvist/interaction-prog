const Search={
    props: ["model", "nav", "resultChoice"],
    data() {
        return {
           promise: DishSource.searchDishes({}),
           data: null,
           error: null,
           text: "",
           type: ""
        };
    },
    created(){
	     this.promise.then(dt=>this.data = dt).catch(er => this.er = er);
    },
    render(h){return h("div", {},
          [
              SearchFormView({
                 onText: x=> this.text = x,
                 onType: x=> this.type = x,
                 onSearch: ()=> {
                   this.promise = DishSource.searchDishes({query: this.text, type: this.type}),
                   this.data=null,
                   this.error=null,
                   this.promise.then(dt=>this.data=dt).catch(er => this.er = er)
                 }
                 ,nav: this.nav,
                 h
               })
              ,
               promiseNoData(this.promise, this.data, this.error, h) ||
                  SearchResultsView({
                      searchResults: this.data,
                      dishChosen: dishID => {this.model.setCurrentDish(dishID),
                                            this.resultChoice[0]()
                                          },
                      h
                   })
          ]);
    }
}
