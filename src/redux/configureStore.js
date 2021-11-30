import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {tableReducer} from './features/Table';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  combineReducers({
    tables: tableReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
