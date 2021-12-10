function Show({hash, children}) {
  const [, setRoute]= React.useState({});
   React.useEffect(()=>
     window.addEventListener("hashchange",
                ()=> setRoute(window.location.hash)),
[]);
   return hash===window.location.hash?children: false;
}
