import { Route, Routes } from "react-router-dom";
import Cart from "../pages/main/cart/cart";
import Categories from "../pages/main/categories/categories";
import DetailProduct from "../pages/main/detailProducts/detailProduct";
import Favorite from "../pages/main/favorite/favorite";
import MainPage from "../pages/main/mainPage";
import WaitingList from "../pages/main/waitingList/waitingList";
import ProductPage from "./../pages/main/productPage/productPage";

export const MAIN_PAGE = "/";
export const CATEGORIES_PAGE = "/categories";
export const CART_PAGE = "/cart";
export const FAVORITE_PAGE = "/favorite";
export const WAITING_LIST = '/waitinglist';

const Routs = () => {
  return (
    <>
      {/* <BreadcrumbsCom /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id/:id" element={<ProductPage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/categories/:id/:id/:id" element={<DetailProduct />} />
        <Route path="/:id" element={<DetailProduct />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/waitinglist" element={<WaitingList />} />
      </Routes>
    </>
  );
};

export default Routs;
