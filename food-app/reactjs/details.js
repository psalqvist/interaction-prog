function Details({model, ok: [navCallBack, navLabel], cancel}){

    const currentDish = useModelProp(model, "currentDish");

    const guests = useModelProp(model, "numberOfGuests");

    const [promise, setPromise] = React.useState(null);

    React.useEffect(
          //()=>setPromise(DishSource.getDishDetails(model.getCurrentDish().id)), []
          ()=>setPromise(currentDish && DishSource.getDishDetails(currentDish)), [currentDish,model]
    );

    const [data, error]= usePromise(promise);

    return promiseNoData(promise, data, error) ||
        h(DetailsView, {
               dish: data,
               guests: guests,
               dishAdded: dish=>{
                 model.addToMenu(dish),
                 navCallBack()
               },
               navLabel: navLabel,
               isDishInMenu: () => model.getMenu().filter(d=>d.id===data.id).length > 0,
               cancel: cancel[0]
        })
}
