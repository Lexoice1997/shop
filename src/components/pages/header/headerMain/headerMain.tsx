/* eslint-disable react-hooks/rules-of-hooks */
import {
  AccountCircle,
  Category,
  FavoriteBorder,
  Login,
  Logout,
  Search,
  ShoppingCart,
  Timer
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, {
  ChangeEvent, useEffect,
  useState
} from "react";
import { NavLink } from "react-router-dom";
import { useAction } from "../../../../hooks/loginAction";
import useDebounce from "../../../../hooks/useDebounce";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { $host } from "../../../../http";
import { getUserInfo } from "./../../../../http/userAPI";
import {
  CART_PAGE,
  CATEGORIES_PAGE,
  FAVORITE_PAGE,
  MAIN_PAGE,
  WAITING_LIST
} from "./../../../Routs/Routs";
// @ts-ignore
import styles from "./headerMain.module.scss";
import LoginModal from "./loginModal";
import RegistrationModal from "./registrationModal";

const HeaderMain = () => {
  const [userInformation, setUserInformation] = useState<any>();
  const [loginModalActive, setLoginModalActive] = useState<boolean>(false);
  const [registrationModalActive, setRegistrationModalActive] =
    useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<any>([]);
  const { user, userInfo, isLogin } = useTypedSelector((state) => state.login);
  const { fetchLogin, setIsLogin } = useAction();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const onHandleSearchValue = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleClose();
    setIsLogin(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const onHandlerModal = (): void => {
    setLoginModalActive(false);
    setRegistrationModalActive(true);
  };

  const getSearchData = async () => {
    const response = await $host.get(`goods/search?text=${searchValue}`);
    setSearchData(response.data);
  };

  useEffect(() => {
    getSearchData();
  }, [debouncedValue]);

  useEffect(() => {
    getUserInfo().then((response) => {
      setUserInformation(response);
      setIsLogin(true);
    });
  }, [isLogin]);

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <NavLink to={MAIN_PAGE}>
          <div className={styles.logo}>Logo</div>
        </NavLink>

        <NavLink to={CATEGORIES_PAGE}>
          <button className={styles.catalogBtn}>
            <Category className={styles.icons} />
            <span>Каталог товаров</span>
          </button>
        </NavLink>
        <div className={styles.searchContainer}>
          <button className={styles.searchBtn} type={"button"}>
            <div>
              <Search />
            </div>
          </button>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Поиск по товаров"
            spellCheck="false"
            aria-label="search"
            autoComplete="off"
            value={searchValue}
            onChange={onHandleSearchValue}
          />
        </div>

        {isLogin ? (
          <div>
            <Button
              className={`${styles.button} ${styles.buttonFirst} styles.contacts`}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircle className={styles.icons} />
              <span>{userInformation ? userInformation.firstName : ""}</span>
            </Button>
            <Menu
              className={styles.menuProfile}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <NavLink to={CART_PAGE}>
                <MenuItem onClick={handleClose}>
                  <ShoppingCart />
                  Корзина
                </MenuItem>
              </NavLink>
              <NavLink to={FAVORITE_PAGE}>
                <MenuItem onClick={handleClose}>
                  <FavoriteBorder />
                  Избранные товары
                </MenuItem>
              </NavLink>
              <NavLink to={WAITING_LIST}>
                <MenuItem onClick={handleClose}>
                  <Timer />
                  Лист ожидание
                </MenuItem>
              </NavLink>

              <MenuItem onClick={handleLogout} className={styles.logout}>
                <Logout />
                Выйти
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <button
            className={`${styles.button} ${styles.buttonFirst}`}
            onClick={() => setLoginModalActive(true)}
          >
            <Login className={styles.icons} />
            <span>Войти</span>
          </button>
        )}

        {loginModalActive && (
          <LoginModal
            loginModalActive={loginModalActive}
            setLoginModalActive={setLoginModalActive}
            onHandlerModal={onHandlerModal}
          />
        )}

        {registrationModalActive && (
          <RegistrationModal
            registrationModalActive={registrationModalActive}
            setRegistrationModalActive={setRegistrationModalActive}
          />
        )}

        <NavLink to={CART_PAGE}>
          <button className={styles.button}>
            <ShoppingCart className={styles.icons} />
            <span>Корзина</span>
          </button>
        </NavLink>
      </div>
      {searchData.map((item: any, index: number) => {
        return <div>{searchValue.length === 0 ? "" : <p>{item.name}</p>}</div>;
      })}
    </div>
  );
};

export default HeaderMain;
