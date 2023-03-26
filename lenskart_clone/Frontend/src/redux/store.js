import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux";
import { CartReducer } from "./CartPage/reducer";
import thunk from "redux-thunk";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { orderReducer } from "./order/order.reducer";

const rootReducer = combineReducers({
  CartReducer,
  wishlistManager: wishlistReducer,
  orderManager: orderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
