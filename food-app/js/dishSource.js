const  DishSource={
  apiCall(params) {
	return fetch(BASE_URL+params, {
            "method": "GET",
            "headers": {
		 'X-Mashape-Key' : API_KEY
         }
	})
  // Handle HTTP error
  .then(response => handleHTTPError(response))
  // from headers to response data
  .then(response => response.json());
  },  // comma between object methods, like between any properties!
  searchDishes({type, query}) {
      if(query != undefined && type != undefined){
        return this.apiCall("recipes/search?query="+query+"&type="+type).then(data=>data.results)
      } else if (type === undefined && query === undefined) {
        return this.apiCall("recipes/search").then(data=>data.results)
      } else if (query === undefined){
        return this.apiCall("recipes/search?type="+type).then(data=>data.results)
      } else if (type === undefined) {
        return this.apiCall("recipes/search?query="+query).then(data=>data.results)
      }
  },
  getDishDetails(id) {
    if(id===undefined){
      id="";
    }
    return this.apiCall("recipes/"+id+"/information")
  }
};

function handleHTTPError(response) {
  if(response.ok) {
    return response;
  } else throw Error(response.statusText);
}
