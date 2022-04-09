import { Dispatch } from "redux";
import { allProduct, productPage } from "../../http/productPageAPI";
import { ProductPageAction, ProductPageActionTypes } from "../../types/productPage";
import { sortBy } from './../../http/productPageAPI';

export const fetchProductPage = (categoryId: string, subCategoryId: string, page: number) => {
  return async (dispatch: Dispatch<ProductPageAction>) => {
    try {
      dispatch({type: ProductPageActionTypes.FETCH_PRODUCT_PAGE})
      const response = await productPage(categoryId, subCategoryId, page);
      // @ts-ignore
      dispatch({type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_SUCCESS, payload: response})
    } catch (e) {
      dispatch({
        type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_ERROR,
        payload: 'Произашла ошибка при загрузке продуктов'
      })
    }
  }
}

export const fetchAllProduct = (categoryId: string, subCategoryId: string) => {
  return async (dispatch: Dispatch<ProductPageAction>) => {
    try {
      dispatch({type: ProductPageActionTypes.FETCH_PRODUCT_PAGE})
      const response = await allProduct(categoryId, subCategoryId);
      // @ts-ignore
      dispatch({type: ProductPageActionTypes.FETCH_ALL_PRODUCT, payload: response})
    } catch (e) {
      dispatch({
        type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_ERROR,
        payload: 'Произашла ошибка при загрузке продуктов'
      })
    }
  }
}

export const fetchSortBy = (categoryId: string, subCategoryId: string,page: number, sort: string, rev: boolean) => {
  return async (dispatch: Dispatch<ProductPageAction>) => {
    try {
      // dispatch({type: ProductPageActionTypes.FETCH_PRODUCT_PAGE})
      const response = await sortBy(categoryId, subCategoryId, page, sort, rev);
      // @ts-ignore
      dispatch({type: ProductPageActionTypes.FETCH_SORT_BY, payload: response})
    } catch (e) {
      dispatch({
        type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_ERROR,
        payload: 'Произашла ошибка при загрузке продуктов'
      })
    }
  }
}

export const setSubCategoryId = (categoryId: string, subCategoryId: string): ProductPageAction => {
  return {type: ProductPageActionTypes.SET_ID, payload: {categoryId: categoryId, subCategoryId: subCategoryId}}
}