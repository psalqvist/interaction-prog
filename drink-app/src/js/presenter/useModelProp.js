import React from 'react'

function useModelProp(model, prop) {
    const [propValue, setPropValue] = React.useState(model[prop]);
    React.useEffect(()=> {
        const obs = () => setPropValue(model[prop]); // anonym funktion obs 
        model.addObserver(obs);
        return ()=> model.removeObserver(obs);
        
    }, [model, prop]);
    return propValue;
}
export default useModelProp;