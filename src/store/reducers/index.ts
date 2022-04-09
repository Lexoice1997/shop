import { combineReducers } from "redux";
import { categoriesReducer } from './categoriesReducer';
import { loginReducer } from "./loginReducer";
import { productPageReducer } from './productPageReducer';
import { registrationReducer } from "./registrationReducer";
import { detailProductReducer } from './detailProductReducer';
import { cartReducer } from "./cartReducer";
import { favoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  categories: categoriesReducer,
  productPage: productPageReducer,
  detailProduct: detailProductReducer,
  cart: cartReducer,
  favoirte: favoriteReducer
})

export type RootType = ReturnType<typeof rootReducer>;