function readModel() {
  const modelString= localStorage.getItem("dinnerModel");

  if (modelString === null) {
    let modelObject = {};
    const model = new DinnerModel();
    return model;
  } else {
    let modelObject = JSON.parse(modelString);
    const model = new DinnerModel(modelObject.guests, modelObject.dishes, modelObject.currentDish);
    return model;
  }

  console.log(modelString);

}
