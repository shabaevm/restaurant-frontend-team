import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { tableReducer } from "./features/Table";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./features/Product";

export const store = createStore(
  combineReducers({
    tables: tableReducer,
    products: productReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
