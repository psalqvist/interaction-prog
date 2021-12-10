class DinnerModel{
  constructor(guests=2, dishes=[], currentDish=null) {
    this.numberOfGuests = guests;
    this.subscribers = [];
    this.dishes = dishes;
    this.currentDish=currentDish;
  }

  setNumberOfGuests(x) {
    if(x <= 0)
      throw "Number of dinner guests cannot be set to zero or a negative number.";
    this.numberOfGuests = x;
    this.notifyObservers();
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  checkDish(dish) {
    if(this.dishes.some(e => e.id === dish.id)) {
      throw "Dish already exists in the menu!"
    } else {
      this.dishes=[dish, ...this.dishes];
      this.notifyObservers();
    }
  }

  addToMenu(dish) {
    try{
      this.checkDish(dish);
    } catch(err) {
      console.error("Error ", err);
    }
  }

  removeFromMenu(dishid) {
    this.dishes = this.dishes.filter(d => d.id !== dishid);
    this.notifyObservers();
  }

  setCurrentDish(dishID) {
    this.currentDish = dishID;
    this.notifyObservers();
  }

  getCurrentDish(){
    return this.currentDish;
  }

  getMenu() {
    return [...this.dishes];
  }

  getIngredients(){
      const result = {}; // empty object used as mapping
      this.dishes.forEach(d => d.extendedIngredients.forEach(i => {
          if(!result[i.name])
              // ingredient not taken into account yet
              // associate the ingredient with the name
              // {...i } is a *copy* of the ingredient (spread syntax)
              // we copy just in case, as we’ll change the object below
              result[i.name] = {...i};
          else{
              result[i.name].amount + i.amount
          }
      }))
      return Object.values(result);
  }

  removeObserver(callback) {
    this.subscribers = this.subscribers.filter((element) => element != callback);
  }


  addObserver(callback) {
    this.subscribers = this.subscribers.concat(callback);
    return () => this.removeObserver(callback);
  }

  notifyObservers() {
    this.subscribers.forEach(aSubscriber=> {
      try{aSubscriber()}catch(err){
        console.error("Error ", err, aSubscriber)}
    });
  }
}
