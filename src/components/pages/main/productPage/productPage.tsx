import {
  CheckCircle,
  FavoriteBorder,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Button, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAction } from "../../../../hooks/loginAction";
import { IProduct } from "../../../../types/productPage";
import { useTypedSelector } from "./../../../../hooks/useTypedSelector";
// @ts-ignore
import styles from "./productPage.module.scss";
import { setCart } from "./../../../../http/cartAPI";
import { setFavorite } from "../../../../http/favoriteAPI";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortByPopularity, setSortByPopularity] = useState<boolean>(true);
  const [sortByPrice, setSortByPrice] = useState<boolean>(true);
  const { id, product, loading, error, allProduct } = useTypedSelector(
    (state) => state.productPage
  );
  const { fetchProductPage, setDetailProductId, fetchAllProduct, fetchSortBy } =
    useAction();

  const onHandlePop = () => {
    if (sortByPopularity) {
      fetchSortBy(id.categoryId, id.subCategoryId, currentPage, "rating", true);
    } else {
      fetchSortBy(
        id.categoryId,
        id.subCategoryId,
        currentPage,
        "rating",
        false
      );
    }
    setSortByPopularity(!sortByPopularity);
  };

  const onHandlePrice = () => {
    if (sortByPrice) {
      fetchSortBy(id.categoryId, id.subCategoryId, currentPage, "price", true);
    } else {
      fetchSortBy(id.categoryId, id.subCategoryId, currentPage, "price", false);
    }
    setSortByPrice(!sortByPrice);
  };

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

  const aviableAmountIcon = (amount: number) => {
    if (amount > 20) {
      return <CheckCircle color="success" />;
    } else if (amount > 5 && amount < 20) {
      return <CheckCircle color="primary" />;
    }
    return <CheckCircle color="error" />;
  };

  useEffect(() => {
    fetchProductPage(id.categoryId, id.subCategoryId, currentPage);
  }, [currentPage, id]);

  useEffect(() => {
    fetchAllProduct(id.categoryId, id.subCategoryId);
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.sort}>
        <span className={styles.sortBold}>Сортировать по:</span>
        <span className={styles.sortByPopularity} onClick={onHandlePop}>
          популярности
        </span>
        <span className={styles.sortByPrice} onClick={onHandlePrice}>
          цене
        </span>
      </div>
      <div className={styles.inner}>
        {product.map((item: IProduct, index: number) => {
          return (
            <div className={styles.product} key={item.id}>
              <div className={styles.productInner}>
                <div
                  className={styles.favoriteProduct}
                  onClick={() => setFavorite({ id: item.id })}
                >
                  <FavoriteBorder />
                </div>
                <NavLink
                  to={item.id}
                  onClick={() => setDetailProductId(item.id)}
                >
                  <div className={styles.img}>
                    <img src={item.imageUrls[0]} alt={item.name} />
                  </div>
                </NavLink>

                <NavLink
                  to={item.id}
                  onClick={() => setDetailProductId(item.id)}
                >
                  <div className={styles.name}>{item.name}</div>
                </NavLink>

                <div className={styles.amount}>
                  {aviableAmountIcon(item.availableAmount)}{" "}
                  <span>В наличии</span>
                </div>
                <div className={styles.price}>{item.price} р.</div>
                <div className={styles.raiting}>
                  {getRatingContent(item.rating)}
                  {getUnratingContent(5 - item.rating)}
                </div>
                <Button
                  className={styles.btn}
                  onClick={() => setCart({ id: item.id })}
                >
                  В корзину
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Stack spacing={2} className={styles.pagination}>
        <Pagination
          count={Math.ceil(allProduct.length / 8)}
          page={currentPage}
          onChange={(e: any, page: number) => {
            setCurrentPage(page);
          }}
        />
      </Stack>
    </div>
  );
};

export default ProductPage;
