import { Dispatch } from "redux";
import { detailProduct } from "../../http/detailProductAPI";
import {
  DetailProductAction,
  DetailProductActionTypes,
} from "../../types/detailProduct";

export const fetchDetailProduct = (id: any) => {
  return async (dispatch: Dispatch<DetailProductAction>) => {
    try {
      dispatch({ type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT });
      const response = await detailProduct(id);
      // @ts-ignore
      dispatch({
        type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT_ERROR,
        payload: "Произашла ошибка при загрузке продукта",
      });
    }
  };
};

export const setDetailProductId = (id: string): DetailProductAction => {
  return { type: DetailProductActionTypes.SET_ID, payload: id };
};
