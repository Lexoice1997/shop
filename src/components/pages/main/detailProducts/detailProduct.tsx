import { Star, StarBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAction } from "./../../../../hooks/loginAction";
import { useTypedSelector } from "./../../../../hooks/useTypedSelector";
// @ts-ignore
import styles from "./detailProduct.module.scss";

const DetailProduct = () => {
  const [numberImg, setNumberImg] = useState<number>(0);
  const { id, product, loading, error } = useTypedSelector(
    (state) => state.detailProduct
  );
  const { fetchDetailProduct } = useAction();

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

  const getImagesContent = (rating: number) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(
        <div
          className={styles.imgs}
          key={rating + i}
          onClick={() => setNumberImg(i)}
        >
          <img src={product.imageUrls[i]} />
        </div>
      );
    }
    return content;
  };

  useEffect(() => {
    fetchDetailProduct(id);
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.detailProduct}>
      <h2>{product.name}</h2>
      <div className={styles.main}>
        <div className={styles.images}>
          <div className={styles.raiting}>
            {getRatingContent(product.rating)}
            {getUnratingContent(5 - product.rating)}
          </div>
          {getImagesContent(product.imageUrls.length)}
        </div>
        <div className={styles.img}>
          <img src={product.imageUrls[numberImg]} />
        </div>
        <div className={styles.btns}>
          <form>
            <div>
              <Button className={styles.btn}>В избранное</Button>
            </div>
            <div>
              <Button className={styles.btn}>В карзину</Button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Описание</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DetailProduct;
