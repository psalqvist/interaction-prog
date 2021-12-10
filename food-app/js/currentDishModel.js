class CurrentDishModel {
  constructor() {
    this.currentDish = "";
    this.subscribers = [];
  }

  setCurrentDish(dish) {
    this.currentDish = dish;
    notifyObservers();
  }

  getCurrentDish(){
    return this.currentDish;
  }

  addObserver(callback) {
    this.subscribers = this.subscribers.concat(callback);
  }

  notifyObservers() {
    this.subscribers.forEach(aSubscriber=> {
      try{aSubscriber()}catch(err){
        console.error("Error ", err, aSubscriber)}
    });
  }
}
