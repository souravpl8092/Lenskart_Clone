import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { CartReducer } from "./CartPage/reducer";
import thunk from "redux-thunk";
import { productReducer } from "./ProductsPage/ProductSlice";

const rootReducer = combineReducers({
  CartReducer,
  productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
;