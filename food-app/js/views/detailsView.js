const DetailsView=({dish, guests, dishAdded, navLabel, isDishInMenu, cancel, h})=>
  <div>
    <h2 class="box">{dish.title}</h2>
    <div class="flexParent2">
      <div class="box">
        <img src={dish.image} height="200"/>
      </div>
      <div class="box">
        Price: {dish.pricePerServing.toFixed(2)}<br/><br/>Price for {guests} guests: {(guests*dish.pricePerServing).toFixed(2)}
      </div>
    </div>
    <div class="box">
      <h3>Ingredients:</h3>
      {
        dish.extendedIngredients.map(
        (d, key) => <div key = {key}>{d.name}: {d.amount*guests} {d.unit}</div>
        )
      }
    </div>
    <div class="box">
    <h3>Procedure:</h3>
    {dish.instructions}
    </div>
    <div class="box">
      <a href={dish.sourceUrl}>For more details</a>.
    </div>
    <div class="flexParent4">
      <div>
        <button class="button" disabled = {isDishInMenu()} onClick = {()=>dishAdded(dish)}>{navLabel}</button>
      </div>
      <div>
        <button class="button" onClick={()=>cancel()}>Cancel</button>
      </div>
    </div>
  </div>
