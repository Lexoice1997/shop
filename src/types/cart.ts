export interface ICartProduct {
  availableAmount: number;
  description: string;
  id: string;
  imageUrls: string[];
  isFavorite: boolean;
  isInCart: boolean;
  name: string;
  price: number;
  rating: number;
  amount?: number;
}

export interface IOrderItem {
  id: string;
  amount: number;
}

export interface IOrderDetails {
  name: string;
  address: string;
  phone: string;
  timeToDeliver: string;
  comment: string;
}

export interface IOrder {
  items: IOrderItem[];
  details: IOrderDetails;
}

export interface ICart {
  firstName: string;
  lastName: string;
  cart: string[];
  favorites: string[];
}

export interface CartState {
  userInfo: ICart;
  loading: boolean;
  error: null | string;
  deleteProd: number;
  totalSum: number;
  product: ICartProduct[];
  orders: IOrder[];
}

export enum CartActionTypes {
  FETCH_CART = "FETCH_CART",
  FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
  FETCH_CART_ERROR = "FETCH_CART_ERROR",
  SET_PRODUCT = "SET_PRODUCT",
  SET_TOTAL_SUM = "SET_TOTAL_SUM",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  SET_ORDER = "SET_ORDER",
}

interface FetchCartAction {
  type: CartActionTypes.FETCH_CART;
}

interface FetchCartSuccessAction {
  type: CartActionTypes.FETCH_CART_SUCCESS;
  payload: ICart;
}

interface FetchCartErrorAction {
  type: CartActionTypes.FETCH_CART_ERROR;
  payload: string;
}

interface DeleteProductAction {
  type: CartActionTypes.DELETE_PRODUCT;
  payload: number;
}

interface SetProductAction {
  type: CartActionTypes.SET_PRODUCT;
  payload: ICartProduct;
}

interface SetTotalSumAction {
  type: CartActionTypes.SET_TOTAL_SUM;
  payload: number;
}

interface SetOrderAction {
  type: CartActionTypes.SET_ORDER;
  payload: IOrder;
}

export type CartAction =
  | FetchCartAction
  | FetchCartSuccessAction
  | FetchCartErrorAction
  | DeleteProductAction
  | SetTotalSumAction
  | SetProductAction
  | SetOrderAction;
