const guestsReducer = (state=2, action) => {
  if (action.type === 'SET_NO_GUESTS') {
    return state = action.guests;
  } else {
    return state;
  }
}

export default guestsReducer;
