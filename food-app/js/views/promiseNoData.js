// check if we do not have a fulfilled promise, if not return "no data", else check error else check data, if we don't return loading animation

function promiseNoData(promise, data, error, h){
     return  !promise && "no data"    // case "0"
             || error && "Error"   // case 3
             || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>  // case 1
}
