export interface IProduct {
  availableAmount: number;
  description: string;
  id: string;
  imageUrls: string[];
  isFavorite: boolean;
  isInCart: boolean;
  name: string;
  price: number;
  rating: number;
}

export interface IProductId {
  categoryId: string;
  subCategoryId: string;
}

export interface ProductPageState {
  id: IProductId;
  product: IProduct[];
  loading: boolean;
  error: null | string;
  page: number;
  allProduct: IProduct[];
}

export enum ProductPageActionTypes {
  FETCH_PRODUCT_PAGE = "FETCH_PRODUCT_PAGE",
  FETCH_PRODUCT_PAGE_SUCCESS = "FETCH_PRODUCT_PAGE_SUCCESS",
  FETCH_PRODUCT_PAGE_ERROR = "FETCH_PRODUCT_PAGE_ERROR",
  SET_ID = "SET_ID",
  SET_PAGE = "SET_PAGE",
  FETCH_ALL_PRODUCT = "FETCH_ALL_PRODUCT",
  FETCH_SORT_BY = "FETCH_SORT_BY",
}

interface FetchProductPageAction {
  type: ProductPageActionTypes.FETCH_PRODUCT_PAGE;
}

interface FetchProductPageSuccessAction {
  type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_SUCCESS;
  payload: IProduct[];
}

interface FetchProductPageErrorAction {
  type: ProductPageActionTypes.FETCH_PRODUCT_PAGE_ERROR;
  payload: string;
}

interface SetIdIdAction {
  type: ProductPageActionTypes.SET_ID;
  payload: IProductId;
}

interface SetPageAction {
  type: ProductPageActionTypes.SET_PAGE;
  payload: number;
}

interface FetchAllProduct {
  type: ProductPageActionTypes.FETCH_ALL_PRODUCT;
  payload: IProduct[];
}

interface FetchSortBy {
  type: ProductPageActionTypes.FETCH_SORT_BY;
  payload: IProduct[];
}

export type ProductPageAction =
  | FetchProductPageAction
  | FetchProductPageSuccessAction
  | FetchProductPageErrorAction
  | SetIdIdAction
  | SetPageAction
  | FetchAllProduct
  | FetchSortBy;
