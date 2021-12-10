// Views in vue have to take h as a property, but React and DOM will ignore this
// so they are still compatible with those frameworks.
const types=["starter", "main course", "dessert"];

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b));
    if (ai<bi) {
      return -1;
    } else if (ai>bi) {
      return 1;
    } else {
      return 0;
    }
}

function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
	    return tp[0];
    return "";
}

function total(dishes){
  totalPrice=0;
  dishes.map(dish=>totalPrice+=dish.pricePerServing)
  return totalPrice;
}

const SidebarView=({guests, setGuests, dishes, removeDish, dishChosen, dishChoiceRoute, h})=>
  <div class = "sidebar">
    <div class = "setguests">
       <button id="roundbutton" onClick={() => setGuests(guests - 1)}
               disabled={guests===1}>-</button>
       <span title="nr. guests"> number of guests: {guests} </span>
       <button id="roundbutton" onClick={() => setGuests(guests + 1)}>+</button>
    </div>
    <div class = "table">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Type</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
           {
             dishes.sort(compareDishes).map((dish, key) =>
               <tr key = {key}>
                 <td><button id="roundbutton" onClick={()=> removeDish(dish.id)}>x</button></td>
                 <td><span id="link"><a href={dishChoiceRoute} onClick={()=>dishChosen(dish.id)}> {dish.title}</a></span></td>
                 <td>{dishType(dish)}</td>
                 <td><p id="price">{(dish.pricePerServing).toFixed(2)}</p></td>
               </tr>
             )
           }
        </tbody>
        <tfoot>
           <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td><p id="price">{(total(dishes)*guests).toFixed(2)}</p></td>
           </tr>
        </tfoot>
      </table>
    </div>
  </div>
