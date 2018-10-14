import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';

export const store = createStore(
  reducers
);

export default store;
