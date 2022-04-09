import React from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ISubCategory } from "../../../../types/categories";
import { useAction } from "./../../../../hooks/loginAction";
// @ts-ignore
import styles from "./categories.module.scss";

const SubCategories = () => {
  const { category } = useTypedSelector((state) => state.categories);
  const { setSubCategoryId } = useAction();

  return (
    <div className={styles.rightContainer}>
      <h2>{category.name}</h2>
      <ul>
        {category.subCategories.map((item: ISubCategory) => {
          return (
            <li
              onClick={() => setSubCategoryId(category.id, item.id)}
              key={item.id}
            >
              <NavLink to={`${category.id}/${item.id}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubCategories;
