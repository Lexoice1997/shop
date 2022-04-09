export interface ICategories {
  id: string;
  name: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  id: string;
  name: string;
}

export interface CategoriesState {
  categories: ICategories[];
  loading: boolean;
  error: null | string;
  category: ICategories;
}

export enum CategoriesActionTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
  SET_SUB_CATEGORIES = "SET_SUB_CATEGORIES"
}

interface FetchCategoriesAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: ICategories[];
}

interface FetchCategoriesErrorAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

interface SetSubCategoriesAction {
  type: CategoriesActionTypes.SET_SUB_CATEGORIES;
  payload: ICategories;
}

export type CategoriesAction =
  | FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction
  | SetSubCategoriesAction;
