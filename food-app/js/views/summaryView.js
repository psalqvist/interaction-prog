function compareIngredients(a,b){
    if(a.aisle < b.aisle){
        return -1;
    }else if(a.aisle > b.aisle){
        return 1;
    }else if(a.name < b.name) {
        return -1;
    }else if(a.name > b.name) {
        return 1;
    }else if(a.name === b.name) {
      throw "The ingredient names are not unique"
    }
}


const SummaryView = ({guests, dishes, nav: [navCallBack, navLabel], ingredients, h}) =>
    <div class="summary">
      <div class="flexParent2">
        <div id="nrguests">Dinner for <span title="nrguests"> {guests} </span> guests:</div>
        <div class="flexParent3"><button id="backtosearch" onClick={navCallBack}> {navLabel} </button></div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Ingredient</td>
            <td>Aisle</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
            {ingredients.sort(compareIngredients).map( (i, key) =>
                    <tr key = {key}>
                        <td> {i.name} </td>
                        <td> {i.aisle} </td>
                        <td> {i.amount.toFixed(2)} </td>
                    </tr>

            )}
        </tbody>
      </table>
    </div>
