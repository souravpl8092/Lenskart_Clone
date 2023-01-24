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

let initialState = {
  loading: false,
  data: [],
  error: false,
  Totalprice: 0,
  Totaldiscountprice: 0,
  ItemCount: 0,
  deletemsg: "",
  loadingrepeat: false,
  errorrepeat: false,
  datarepeat: "",
  coupon: 0,
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartDataLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case applyCoupon: {
      return {
        ...state,
        coupon: payload,
      };
    }

    case cartDataSuccess: {
      let beforeDiscoutPrice = 0;
      let Atdiscountprice = 0;
      payload.map(({ product_strike, product_discountedPrice }) => {
        if (product_strike !== "" && product_discountedPrice !== "") {
          beforeDiscoutPrice += Number(product_strike);
          Atdiscountprice += Number(product_discountedPrice);
        }
      });

      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
        ItemCount: payload.length,
        Totalprice: beforeDiscoutPrice,
        Totaldiscountprice: Atdiscountprice,
      };
    }
    case cartDataError: {
      return {
        loading: false,
        data: [],
        error: true,
      };
    }

    case deleteLoading: {
      return {
        ...state,
        loading: true,
      };
    }
    case deleteSuccess: {
      return {
        ...state,
        deletemsg: payload,
      };
    }
    case deleteError: {
      return {
        ...state,
        loading: true,
        error: true,
        deletemsg: "",
      };
    }

    case repeatLoading: {
      return {
        ...state,
        loadingrepeat: true,
      };
    }

    case repeatSuccess: {
      return {
        ...state,
        loadingrepeat: false,
        datarepeat: payload,
        errorrepeat: false,
      };
    }

    case repeatError: {
      return {
        ...state,
        loadingrepeat: false,
        datarepeat: "",
        errorrepeat: true,
      };
    }

    default:
      return state;
  }
};
