const SearchResultsView=({searchResults, dishChosen, h})=>

  <div class="flexParent">
  {
    searchResults.map(
      d =>
      <span key = {d.id} class = "searchResult" onClick={()=>dishChosen(d.id)}>
          <div>
            <img src={"https://spoonacular.com/recipeImages/"+d.image} height="100"/>
          </div>
          <div>
            <p>{d.title}</p>
          </div>
      </span>
    )
  }
  </div>


const SearchFormView=({onSearch, onType, onText, nav: [navCallBack, navLabel], h})=>
  <div class="flexParent2">
    <input onChange={event => onText(event.target.value)}></input>
    <select default-value = "starter" onChange={event => onType(event.target.value)}>
      <option value="starter">Starter</option>
      <option value="main course">Main course</option>
      <option value="dessert">Dessert</option>
    </select>
    <button onClick={event => onSearch(event.target.value)}>Search</button>
    <button onClick={navCallBack}>{navLabel}</button>
  </div>

const SearchFormReact=({onSearch, nav: [navCallBack, navLabel]})=>{
    const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");
    return (
      <div class="flexParent2">
        <input onChange={event => setText(event.target.value)}></input>
        <select default-value = "starter" onChange={event => setType(event.target.value)}>
          <option value="starter">Starter</option>
          <option value="main course">Main course</option>
          <option value="dessert">Dessert</option>
        </select>
        <button id="search" onClick={event => onSearch(type, text)}>Search</button>
        <div class="flexParent3">
          <button id="summary" onClick={navCallBack}>{navLabel}</button>
        </div>
      </div>
    )
}
