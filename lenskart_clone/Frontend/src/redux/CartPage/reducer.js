import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  RESET,
  applyCoupon
} from "./actionType";

let initialState = {
  loading: false,
  error: false,
  cart: [],
  coupon: 0
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case applyCoupon: {
      return {
        ...state,
        coupon: payload
      };
    }

    case ADD_TO_CART: {
      const { cart } = state;
      const product = payload;
      const existingItem = cart.findIndex((item) => item._id === product._id);
      if (existingItem === -1) {
        const newItem = {
          ...product
        };
        return {
          ...state,
          cart: [...cart, newItem]
        };
      }
      return alert("Product Already Add");
    }
    case REMOVE_FROM_CART: {
      return {
        cart: state.cart.filter((item) => item._id !== payload)
      };
    }

    case INCREMENT: {
      return {
        cart: state.cart.filter((item) => {
          if (item.id === payload) {
            return (item.quantity = +item.quantity + 1);
          }
          return item;
        })
      };
    }
    case DECREMENT: {
      return {
        cart: state.cart.filter((item) => {
          if (item.id === payload) {
            return (item.quantity = +item.quantity - 1);
          }
          return item;
        })
      };
    }

    case RESET: {
      return {
        cart: []
      };
    }

    default:
      return state;
  }
};
