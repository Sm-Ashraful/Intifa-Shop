import axiosInstance from "../helpers/axios";
import { productConstnts } from "./constant";

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/products/${slug}`);
      if (res.status === 200) {
        console.log(res);
        dispatch({
          type: productConstnts.GET_PRODUCTS_BY_SLUG,
          payload: res.data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
