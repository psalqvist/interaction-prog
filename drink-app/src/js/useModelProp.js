// Custom hook
import React from 'react'

function useModelProp(model, prop) {// ordinary func, not component!
    const [propValue, setPropValue]= React.useState(model[prop]); // mode[prop] Will go to model and get the value using the key prop
    React.useEffect(function(){
       const obs= ()=>setPropValue(model[prop]); // model[prop] Will go to model and get the value using the key prop
       return model.addObserver(obs);
    }, [model, prop]); // react uses these to optimize rendering, only runs effect if these change
    return propValue;
}

export default useModelProp;
