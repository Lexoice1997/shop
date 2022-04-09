import { ShowChart } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAction } from "../../../../hooks/loginAction";
import { $host } from "../../../../http";
// @ts-ignore
import styles from "./headerNavigation.module.scss";

const HeaderNavigation = () => {
  const [categories, setCategories] = useState<any>();
  const { setSubCategoryId } = useAction();

  const getCategories = async () => {
    const response = await $host.get("categories");
    setCategories(response.data);
  };

  console.log(categories);

  useEffect(() => {
    getCategories();
  }, []);

  if (categories === undefined) {
    return <div>ошибка</div>;
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.inner}>
        <ul>
          <NavLink
            to={`categories/${categories[1].id}/${categories[1].subCategories[6].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[1].id,
                  categories[1].subCategories[6].id
                )
              }
            >
              Телевизоры
            </li>
          </NavLink>
          <NavLink
            to={`categories/${categories[1].id}/${categories[1].subCategories[0].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[1].id,
                  categories[1].subCategories[0].id
                )
              }
            >
              Смартфоны
            </li>
          </NavLink>
          <NavLink
            to={`categories/${categories[0].id}/${categories[0].subCategories[3].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[0].id,
                  categories[0].subCategories[3].id
                )
              }
            >
              Холодильники
            </li>
          </NavLink>
          <NavLink
            to={`categories/${categories[2].id}/${categories[2].subCategories[0].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[2].id,
                  categories[2].subCategories[0].id
                )
              }
            >
              Ноутбуки
            </li>
          </NavLink>
          <NavLink
            to={`categories/${categories[0].id}/${categories[0].subCategories[8].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[0].id,
                  categories[0].subCategories[8].id
                )
              }
            >
              Пылесосы
            </li>
          </NavLink>
          <NavLink
            to={`categories/${categories[2].id}/${categories[2].subCategories[2].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[2].id,
                  categories[2].subCategories[2].id
                )
              }
            >
              Консоли
            </li>
          </NavLink>

          <NavLink
            to={`categories/${categories[3].id}/${categories[3].subCategories[0].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[3].id,
                  categories[3].subCategories[0].id
                )
              }
            >
              Диваны
            </li>
          </NavLink>

          <NavLink
            to={`categories/${categories[4].id}/${categories[4].subCategories[1].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[4].id,
                  categories[4].subCategories[1].id
                )
              }
            >
              Книги
            </li>
          </NavLink>

          <NavLink
            to={`categories/${categories[3].id}/${categories[3].subCategories[4].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[3].id,
                  categories[3].subCategories[4].id
                )
              }
            >
              Столы
            </li>
          </NavLink>

          <NavLink
            to={`categories/${categories[0].id}/${categories[0].subCategories[1].id}`}
          >
            <li
              onClick={() =>
                setSubCategoryId(
                  categories[0].id,
                  categories[0].subCategories[1].id
                )
              }
            >
              Плиты
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavigation;
