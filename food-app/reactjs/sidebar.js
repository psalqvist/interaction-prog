// subcomponents, as SidebarView) gets rerendered

function Sidebar({model, nav, dishChoiceRoute}) {

  const guests = useModelProp(model, "numberOfGuests");
  const dishes = useModelProp(model, "dishes");

  return h(SidebarView,
              {
                guests: guests,
                setGuests: guests => model.setNumberOfGuests(guests),
                dishes: dishes,
                removeDish: id => model.removeFromMenu(id),
                dishChosen: dishID => {
                                        model.setCurrentDish(dishID);
                                        navCallBack();
                                      },
                dishChoiceRoute: dishChoiceRoute
              }
          );
}
