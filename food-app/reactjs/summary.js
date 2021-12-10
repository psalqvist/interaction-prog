function Summary({model, nav}) {
  const guests = useModelProp(model, "numberOfGuests");
  const dishes = useModelProp(model, "dishes");

  return h(SummaryView, {
    guests: guests,
    dishes: dishes,
    nav: nav,
    ingredients: model.getIngredients()
  });

}
