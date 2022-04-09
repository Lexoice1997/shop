import { IProduct } from "./productPage";

export interface IFavorite {
  firstName: string;
  lastName: string;
  cart: string[];
  favorites: string[];
  orders: any;
}

export interface FavoriteState {
  userInfo: IFavorite;
  loading: boolean;
  error: null | string;
  deleteProd: number;
  totalSum: number;
  product: IProduct[];
}

export enum FavoriteActionTypes {
  FETCH_FAVORITE = "FETCH_FAVORITE",
  FETCH_FAVORITE_SUCCESS = "FETCH_FAVORITE_SUCCESS",
  FETCH_FAVORITE_ERROR = "FETCH_FAVORITE_ERROR",
  SET_PRODUCT = "SET_PRODUCT",
  SET_TOTAL_SUM = "SET_TOTAL_SUM",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}

interface FetchFavoriteAction {
  type: FavoriteActionTypes.FETCH_FAVORITE;
}

interface FetchFavoriteSuccessAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_SUCCESS;
  payload: IFavorite;
}

interface FetchFavoriteErrorAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ERROR;
  payload: string;
}

interface DeleteProductAction {
  type: FavoriteActionTypes.DELETE_PRODUCT;
  payload: number;
}

interface SetProductAction {
  type: FavoriteActionTypes.SET_PRODUCT;
  payload: IProduct;
}

interface SetTotalSumAction {
  type: FavoriteActionTypes.SET_TOTAL_SUM;
  payload: number;
}

export type FavoriteAction =
  | FetchFavoriteAction
  | FetchFavoriteSuccessAction
  | FetchFavoriteErrorAction
  | DeleteProductAction
  | SetTotalSumAction
  | SetProductAction;
