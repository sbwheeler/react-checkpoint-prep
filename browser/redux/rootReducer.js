import { combineReducers } from 'redux';
import kittiesReducer from './kittiesReducer';
import puppiesReducer from './puppiesReducer';

export default combineReducers({
  kitties: kittiesReducer,
  puppies: puppiesReducer,
});
