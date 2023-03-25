import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET } from "./wishlist.types";

const wishlistInitalState = {
  loading: false,
  error: false,
  wishlist: []
};

export const wishlistReducer = (state = wishlistInitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_WISHLIST: {
      const { wishlist } = state;
      const product = payload;

      const newItem = {
        ...product
      };
      return {
        ...state,
        wishlist: [...wishlist, newItem]
      };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        wishlist: state.wishlist.filter((item) => item._id !== payload)
      };
    }

    case RESET: {
      return {
        wishlist: []
      };
    }

    default: {
      return state;
    }
  }
};
