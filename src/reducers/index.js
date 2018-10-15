import { combineReducers } from 'redux';
import notes from './notes';
import searchFilter from './searchFilter';

export default combineReducers({
  notes,
  searchFilter,
});
