import { PLACED_ORDER } from "./order.types";

export const addToOrder = (product) => {
  return {
    type: PLACED_ORDER,
    payload: product,
  };
};
