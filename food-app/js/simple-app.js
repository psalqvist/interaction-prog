const App = ({model}) =>

  <div class="flexParent">
     <div class="sidebar debug"><Sidebar model={model}/></div>
     <div class="mainContent debug"><Summary model={model}/></div>
  </div>;
