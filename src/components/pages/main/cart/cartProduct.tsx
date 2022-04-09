import React, { FC, useEffect, useState } from "react";
import { useAction } from "../../../../hooks/loginAction";
import { $host } from "../../../../http";
import { deleteCart } from "../../../../http/cartAPI";
import { IProduct } from "../../../../types/productPage";
//@ts-ignore
import styles from "./cart.module.scss";

interface ICartProduct {
  itemId: string;
}

const CartProduct: FC<ICartProduct> = ({ itemId }) => {
  const [product, setProduct] = useState<IProduct>();
  const [count, setCount] = useState<number>(1);
  const [isDisabledPlus, setIsDisabledPlus] = useState<boolean>(false);
  const [isDisabledMinus, setIsDisabledMinus] = useState<boolean>(false);

  const { deleteProduct, setTotalSum } = useAction();

  function handleCountPlus() {
    if (count > product!.availableAmount) {
      setIsDisabledPlus(true);
    } else {
      setIsDisabledPlus(false);
      setIsDisabledMinus(false);
      setCount(count + 1);
      setTotalSum(count * product!.price);
    }
  }

  function handleCountMinus() {
    if (count === 0) {
      setIsDisabledMinus(true);
    } else {
      setIsDisabledMinus(false);
      setIsDisabledPlus(false);
      setCount(count - 1);
      setTotalSum(count * product!.price);
    }
  }

  function handleDelete() {
    deleteProduct();
    deleteCart(product!.id);
  }

  const getProduct = async () => {
    const { data } = await $host.get(`goods/item/${itemId}`);
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (product === undefined) {
    return <div>ошибка</div>;
  }

  return (
    <div className={styles.productBody}>
      <div className={styles.product}>
        <div className={styles.productMain}>
          <div className={styles.productLeft}>
            <img src={product.imageUrls[0]} alt={product.name} />
            <button onClick={handleDelete}>Удалить</button>
          </div>
          <div className={styles.productRight}>
            <p>{product.name}</p>
            <p>Добавить в избранное</p>
          </div>
        </div>
        <div className={styles.counter}>
          <button onClick={handleCountMinus} disabled={isDisabledMinus}>
            -
          </button>
          <p>{count}</p>
          <button onClick={handleCountPlus} disabled={isDisabledPlus}>
            +
          </button>
        </div>
        <div>{product.price * count}р.</div>
      </div>
    </div>
  );
};

export default CartProduct;
