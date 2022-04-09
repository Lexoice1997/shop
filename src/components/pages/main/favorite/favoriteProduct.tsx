import { Star, StarBorder } from "@mui/icons-material";
import React, { FC, useEffect, useState } from "react";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
//@ts-ignore
import styles from "./favorite.module.scss";
import { IProduct } from "./../../../../types/productPage";
import { $host } from "../../../../http";
import {
  deleteFavoirite,
  getFavoriteProduct,
} from "../../../../http/favoriteAPI";
import { setCart } from "../../../../http/cartAPI";

interface IFavoriteProduct {
  itemId: string;
}

const FavoriteProduct: FC<IFavoriteProduct> = ({ itemId }) => {
  const [product, setProduct] = useState<IProduct>();

  const { deleteFavoriteProduct } = useAction();

  const getRatingContent = (rating: number) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<Star key={rating + i} />);
    }
    return content;
  };

  const getUnratingContent = (rating: number) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<StarBorder key={rating + i} />);
    }
    return content;
  };

  const getProduct = async () => {
    const response = await $host.get(`goods/item/${itemId}`);
    setProduct(response.data);
  };

  function handleDelete() {
    deleteFavoriteProduct();
    deleteFavoirite(product!.id);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (product === undefined) {
    return <div>ошибка</div>;
  }

  return (
    <div className={styles.favorite}>
      <div className={styles.img}>
        <img src={product.imageUrls[0]} alt={product.name} />
      </div>
      <div className={styles.content}>
        <a href="" className={styles.name}>
          {product.name}
        </a>
        <p className={styles.rating}>
          {getRatingContent(product.rating)}
          {getUnratingContent(5 - product.rating)}
        </p>
        <p className={styles.price}>{product.price}</p>
        <button
          className={styles.btnCart}
          onClick={() => setCart({ id: product.id })}
        >
          в карзину
        </button>
        <a href="" className={styles.favoriteBtn} onClick={handleDelete}>
          удалить из списка
        </a>
      </div>
    </div>
  );
};

export default FavoriteProduct;
