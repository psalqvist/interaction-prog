function Sidebar({model}) {
  const root= h("div"); // DIV that will hold the View
  root.append(h(SidebarView, {
    guests: model.getNumberOfGuests(),
    setGuests: x => model.setNumberOfGuests(x)

  }));
  model.addObserver(function(){
    root.firstChild.remove();
    root.append(h(SidebarView, {
      guests: model.getNumberOfGuests(),
      setGuests: x => model.setNumberOfGuests(x)
    }));
  })
  return root;
}
