import { Dispatch } from "redux";
import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";
import { getUserInfo } from "./../../http/userAPI";

export const fetchFavorite = () => {
  return async (dispatch: Dispatch<FavoriteAction>)=> {
    try {
      dispatch({ type: FavoriteActionTypes.FETCH_FAVORITE });
      const response = await getUserInfo();
      dispatch({
        type: FavoriteActionTypes.FETCH_FAVORITE_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: FavoriteActionTypes.FETCH_FAVORITE_ERROR,
        payload: "Произошла ошибка при загрузке карзины",
      });
    }
  };
};

export const deleteFavoriteProduct = () => {
  return { type: FavoriteActionTypes.DELETE_PRODUCT, payload: 1 };
};

export const setTotalFavoriteSum = (sum: number) => {
  return { type: FavoriteActionTypes.SET_TOTAL_SUM, payload: sum };
};
