import { newsReducer } from "./features/NewsReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { tableReducer } from "./features/Table";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./features/Product";
import { authReducer } from "./features/Auth";
import { logger } from 'redux-logger/src';

export const store = createStore(
  combineReducers({
    tables: tableReducer,
    products: productReducer,
    news: newsReducer,
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
