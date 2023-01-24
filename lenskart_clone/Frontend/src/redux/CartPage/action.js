import axios from "axios";
import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
  repeatError,
  repeatLoading,
  repeatSuccess,
  applyCoupon,
} from "./actionType";

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: cartDataLoading });
    await axios
      .get(`https://spotless-erin-trousers.cyclic.app/cart`)
      .then((res) => {
        dispatch({ type: cartDataSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: cartDataError });
  }
};

export const DeleteData = (id) => async (dispatch) => {
  try {
    dispatch({ type: deleteLoading });
    await axios
      .delete(`https://spotless-erin-trousers.cyclic.app/delete/${id}`)
      .then((res) => {
        dispatch({ type: deleteSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: deleteError });
  }
};

export const repeatData = (data) => async (dispatch) => {
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
};

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
    dispatch({type: applyCoupon, payload:0})
  }
};
