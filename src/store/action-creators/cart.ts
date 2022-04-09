import { Dispatch } from "redux";
import { getProduct, postOrder } from "../../http/cartAPI";
import { CartAction, CartActionTypes, IOrder } from "../../types/cart";
import { getUserInfo } from "./../../http/userAPI";

export const fetchCart = () => {
  return async (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({ type: CartActionTypes.FETCH_CART });
      const response = await getUserInfo();
      dispatch({ type: CartActionTypes.FETCH_CART_SUCCESS, payload: response });
    } catch (e) {
      dispatch({
        type: CartActionTypes.FETCH_CART_ERROR,
        payload: "Произошла ошибка при загрузке карзины",
      });
    }
  };
};

export const deleteProduct = () => {
  return { type: CartActionTypes.DELETE_PRODUCT, payload: 1 };
};

export const setCartProduct = (itemId: string) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const response = await getProduct(itemId);
    dispatch({ type: CartActionTypes.SET_PRODUCT, payload: response });
  };
};

export const setTotalSum = (sum: number) => {
  return { type: CartActionTypes.SET_TOTAL_SUM, payload: sum };
};

export const setOrder = (order: IOrder) => {
  return async (dispatch: Dispatch<CartAction>) => {
    const response = await postOrder(order);
    dispatch({ type: CartActionTypes.SET_ORDER, payload: order });
  };
};
