function Summary({model}) {

  const [guests, setGuestNumber] = useModelProp(model, "numberOfGuests"); //Where numberOfGuests is a callback

  return h(SummaryView, {guests: guests});
}
