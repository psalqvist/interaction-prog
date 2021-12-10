import guestsReducer from './guestsReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  guests: guestsReducer
});

export default allReducers;
