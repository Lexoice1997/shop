import React, { useEffect } from "react";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
//@ts-ignore
import styles from "./cart.module.scss";
import CartProducts from "./cartProducts";
import EmptyCart from "./emptyCart";
import Order from "./order";

const Cart = () => {
  const { userInfo, loading, error, deleteProd } = useTypedSelector(
    (state) => state.cart
  );

  return (
    <div className={styles.cartPage}>
      <CartProducts />
      <Order />
    </div>
  );
};

export default Cart;
