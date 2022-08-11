import { productConstnts } from "../actions/constant";

const initState = {
  products: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case productConstnts.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
  }
};
