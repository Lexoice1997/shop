import React from "react";
//@ts-ignore
import styles from "./cart.module.scss";

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <div>
        <div className={styles.emptyCartImg}></div>
        <h2>В вашей корзине пусто? Не беда!</h2>
        <h3>
          Начните выбирать товары из широкого ассортимента нашего каталога.
        </h3>
        <button>На главную</button>
      </div>
    </div>
  );
};

export default EmptyCart;
