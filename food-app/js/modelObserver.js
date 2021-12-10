function ModelObserver({model}) {
  model.addObserver(() =>
    localStorage.setItem(
      "dinnerModel",
      JSON.stringify({guests: model.getNumberOfGuests(),
                      dishes: model.getMenu(),
                      currentDish: model.currentDish
                    })
     )
   )
}
