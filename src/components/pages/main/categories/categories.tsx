import {
  Computer,
  Kitchen,
  Smartphone,
  SportsEsports,
  Weekend,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { ICategories } from "../../../../types/categories";
import { useAction } from "./../../../../hooks/loginAction";
import { useTypedSelector } from "./../../../../hooks/useTypedSelector";
// @ts-ignore
import styles from "./categories.module.scss";
import SubCategories from "./subcategories";

const Categories = () => {
  const { categories, error, loading } = useTypedSelector(
    (state) => state.categories
  );
  const { fetchCategories, setSubCategiries } = useAction();

  const getCategoriId = (index: number) => {
    setSubCategiries(categories[index]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.categoriesContainer}>
        <div className={styles.leftContainer}>
          <ul>
            {categories.map((item: ICategories, index: number) => {
              if (index === 0) {
                return (
                  <li onClick={() => getCategoriId(index)} key={item.id}>
                    <Kitchen />
                    <span>{item.name}</span>
                  </li>
                );
              } else if (index === 1) {
                return (
                  <li onClick={() => getCategoriId(index)} key={item.id}>
                    <Smartphone />
                    <span>{item.name}</span>
                  </li>
                );
              } else if (index === 2) {
                return (
                  <li onClick={() => getCategoriId(index)} key={item.id}>
                    <Computer />
                    <span>{item.name}</span>
                  </li>
                );
              } else if (index === 3) {
                return (
                  <li onClick={() => getCategoriId(index)} key={item.id}>
                    <Weekend />
                    <span>{item.name}</span>
                  </li>
                );
              } else {
                return (
                  <li onClick={() => getCategoriId(index)} key={item.id}>
                    <SportsEsports />
                    <span>{item.name}</span>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <SubCategories />
      </div>
    </div>
  );
};

export default Categories;
