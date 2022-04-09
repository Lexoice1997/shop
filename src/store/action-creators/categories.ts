import { Dispatch } from "redux";
import { categories } from "../../http/categoriesAPI";
import { CategoriesAction, CategoriesActionTypes, ICategories } from "../../types/categories";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES})
      const response = await categories();
      // @ts-ignore
      dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response})
    } catch (e) {
      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        payload: 'Произошла ошибка при загрузке категории',
      })
    }
  }
}

export const setSubCategiries = (subCategories: ICategories): CategoriesAction => {
  return {type: CategoriesActionTypes.SET_SUB_CATEGORIES, payload: subCategories}
}