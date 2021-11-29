import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {categoryReducer} from './features/categories';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  combineReducers({
    categories: categoryReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
