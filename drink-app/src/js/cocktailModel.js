class CocktailModel {
  constructor(drinks = [], currentDrink = null) {
    this.drinks = drinks;
    this.currentDrink = currentDrink;
    this.subscribers = [];
  }

  setCurrentDrink(drinkID) {
    this.currentDrink = drinkID;
    this.notifyObservers();
  }

  getDrinkList() {
    return [...this.drinks];
  }

  removeObserver(callback) {
    this.subscribers = this.subscribers.filter(
      (element) => element !== callback
    );
  }

  notifyObservers() {
    this.subscribers.forEach((aSubscriber) => {
      try {
        aSubscriber();
      } catch (err) {
        console.error('Error ', err, aSubscriber);
      }
    });
  }

  addObserver(callback) {
    this.subscribers = this.subscribers.concat(callback);
    return () => this.removeObserver(callback);
  }

  checkDrink(drink) {
    if (this.drinks.some((e) => e.idDrink === drink.idDrink)) {
      throw "Dish already exists in the menu!";
    } else {
      if (!drink.rating) {
        drink.rating = 0;
        drink.rate = 0;
      }
      this.drinks = [drink, ...this.drinks];
      this.notifyObservers();
    }
  }

  removeFromDrinkList(drink) {
    this.drinks = this.drinks.filter((e) => e.idDrink !== drink.idDrink);
    this.notifyObservers();
  }

  addToDrinkList(drink) {
    try {
      this.checkDrink(drink);
    } catch (err) {
      console.error('Error ', err);
    }
  }
}

export default CocktailModel;
