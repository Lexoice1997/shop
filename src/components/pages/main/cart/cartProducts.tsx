import React, { useEffect } from "react";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
//@ts-ignore
import styles from "./cart.module.scss";
import CartProduct from "./cartProduct";
import EmptyCart from "./emptyCart";

const CartProducts = () => {
  const { userInfo, loading, error, deleteProd, totalSum } = useTypedSelector(
    (state) => state.cart
  );

  const { fetchCart } = useAction();

  useEffect(() => {
    fetchCart();
  }, [deleteProd]);

  if (loading) {
    return <div>Идет загрузка</div>;
  }

  if (error || userInfo.cart.length === 0) {
    return (
      <div className={styles.cartPage}>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.products}>
        <h2>Корзина</h2>
        <div className={styles.productHead}>
          <span>Товар</span>
          <span>Количество</span>
          <span>Цена</span>
        </div>
        {userInfo.cart.map((itemId: string) => {
          return <CartProduct itemId={itemId} />;
        })}
      </div>
    </div>
  );
};

export default CartProducts;
