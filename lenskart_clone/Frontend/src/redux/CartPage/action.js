import {
  applyCoupon,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  RESET
} from "./actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  };
};

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id
  };
};

export const cartReset = (id) => {
  return {
    type: RESET
  };
};
/* export const repeatData = (data) => async (dispatch) => {
  try {
    dispatch({ type: repeatLoading });
    await axios
      .post(`https://spotless-erin-trousers.cyclic.app/post/cart`, data)
      .then((res) => {
        dispatch({ type: repeatSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: repeatError });
  }
}; */

export const coupon = (couponCode) => (dispatch) => {
  if (couponCode === "MASAI40") {
    dispatch({ type: applyCoupon, payload: 50 });
  } else if (couponCode === "MASAI30") {
    dispatch({ type: applyCoupon, payload: 45 });
  } else if (couponCode === "MASAI90") {
    dispatch({ type: applyCoupon, payload: 90 });
  } else if (couponCode === "MASAI20") {
    dispatch({ type: applyCoupon, payload: 30 });
  } else if (couponCode === "MASAI70") {
    dispatch({ type: applyCoupon, payload: 70 });
  } else {
    dispatch({ type: applyCoupon, payload: 0 });
  }
};
