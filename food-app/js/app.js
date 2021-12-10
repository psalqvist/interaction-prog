const summaryNav=[()=> window.location.hash="#summary", "Summary"]
const backToSearch=[()=>window.location.hash="#search", "Back to search"]
const dishChoice=[()=>window.location.hash="#details", ""]
const addToMenu= [()=>window.location.hash="#search", "Add to menu"]
const cancelDetails=[()=>window.location.hash="#search", "Cancel"]
const App = ({model, h}) =>
{
  // Set default hash to url
  console.log(model.getIngredients());
  defaultRoute();

  // Set eventlistener to update url to default when incorrent hash is passed in browser
  window.addEventListener("hashchange", defaultRoute);

  return (
    <div class="flexParent1">
    <div>
      <Sidebar model={model} resultChoice={dishChoice} dishChoiceRoute="#details"/>
    </div>
      <Show hash="#search"><div><Search model={model} nav={summaryNav} resultChoice={dishChoice}/></div></Show>


      <Show hash="#summary"><div id="summarydiv"><Summary model={model} nav={backToSearch}/></div></Show>


      <Show hash="#details"><div><Details model={model} ok={addToMenu} cancel={backToSearch}/></div></Show>

    </div>

    // <div class="flexParent1">
    //   <div>
    //     <Sidebar model = {model} resultChoice={dishChoice} dishChoiceRoute="#details"/>
    //   </div>
    //   <div>
    //     <Show hash="#details"><Details model = {model} ok={backToSearch} cancel = {backToSearch}/></Show>
    //   </div>
    //   <div class="flexParent">
    //     <Show hash="#search"><div class="debug"><Search nav={summaryNav} resultChoice={dishChoice}/></div></Show>
    //     <Show hash="#summary"><div><Summary model={model} nav={backToSearch}/></div></Show>
    //   </div>
    // </div>
  )
}
