import { IProduct } from "./productPage";

export interface DetailProductState {
  id: string;
  product: IProduct;
  loading: boolean;
  error: null | string;
}

export enum DetailProductActionTypes {
  FETCH_DETAIL_PRODUCT = "FETCH_DETAIL_PRODUCT",
  FETCH_DETAIL_PRODUCT_SUCCESS = "FETCH_DETAIL_PRODUCT_SUCCESS",
  FETCH_DETAIL_PRODUCT_ERROR = "FETCH_DETAIL_PRODUCT_ERROR",
  SET_ID = "SET_ID",
}

interface FetchDetailProductAction {
  type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT;
}

interface FetchDetailProductSuccessAction {
  type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT_SUCCESS;
  payload: IProduct;
}

interface FetchDetailProductErrorAction {
  type: DetailProductActionTypes.FETCH_DETAIL_PRODUCT_ERROR;
  payload: string;
}

interface SetIdAction {
  type: DetailProductActionTypes.SET_ID;
  payload: string;
}

export type DetailProductAction =
  | FetchDetailProductAction
  | FetchDetailProductSuccessAction
  | FetchDetailProductErrorAction
  | SetIdAction;
