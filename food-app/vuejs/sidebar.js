// // In Vue there is no need for model.addObserver. That is because whenever
// a property of a Vue reactive object changes, all components that depend
// on it are re-rendered!

// In Vue we have to use this.property (eg this.model) to reach property,
// which differs from react


const Sidebar= {
    props: ["model", "resultChoice", "dishChoiceRoute"],
    render(h){
       return SidebarView({
            guests: this.model.getNumberOfGuests(),
            dishes: this.model.getMenu(),
            setGuests: x=> this.model.setNumberOfGuests(x),
            removeDish: id => this.model.removeFromMenu(id),
            dishChosen: dishID => {
                                    this.model.setCurrentDish(dishID);
                                    this.resultChoice[0]();
                                  },
            dishChoiceRoute: this.dishChoiceRoute,
            h
          });
     }
}
