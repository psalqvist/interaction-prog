const ProfileView = ({ ToSearch, toDrinkList }) => {
  return (
    <div>
      <h1>User profile</h1>
      <button onClick={toDrinkList}>My Drinklist</button>
      <button onClick={ToSearch}>Search Drinks</button>
    </div>
  );
};

const ProfileResult = ({ strDrink, strDrinkThumb, strInstructions }) => {
  return (
    <div>
      <h1>{strDrink}</h1>
      <img src={strDrinkThumb} alt="" />
      <p>
        Instructions: <br />
        {strInstructions}
      </p>
    </div>
  );
};
export { ProfileResult, ProfileView };
