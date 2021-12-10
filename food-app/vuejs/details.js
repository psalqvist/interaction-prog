// // In Vue there is no need for model.addObserver. That is because whenever
// a property of a Vue reactive object changes, all components that depend
// on it are re-rendered!

// Although, if we want to call a callback function when a property changes, we
// use watchers

// In Vue we have to use this.property (eg this.model) to reach property,
// which differs from react




const Details={
  props:["model", "ok", "cancel"],
  data(){
     return {
       promise: null,
       data:null,
       error:null
      };
    },
    watch:{
        'model.currentDish': {
           immediate:true,
           // if currentDish changes, perform everything inside handler(){}
           handler(){
              this.promise=this.model.currentDish && DishSource.getDishDetails(this.model.currentDish);
              this.data=null;
              this.error=null;
              // if we have a promise, we subscribe to it;
              if(this.promise !== undefined){
                this.promise.then(dt => this.data=dt).catch(er => this.error = er);
              }
           }
        }
    },
    render(h){
       return promiseNoData(this.promise, this.data, this.error, h) ||
              DetailsView({
                dish: this.data,
                guests: this.model.getNumberOfGuests(),
                dishAdded: dish=>{
                  this.model.addToMenu(dish),
                  this.ok[0]()
                }
                ,
                navLabel: this.ok[1],
                isDishInMenu: () => this.model.getMenu().filter(d=>d.id===this.data.id).length > 0,
                cancel: this.cancel[0],
                h
              });
    }
};
