import React from 'react';
// @ts-ignore
import styles from './header.module.scss';
import HeaderInfo from "./headerInfo/headerInfo";
import HeaderMain from './headerMain/headerMain';
import HeaderNavigation from "./headerNavigation/headerNavigation";

const Header = () => {
  return (
    <div>
      <HeaderInfo />
      <div className={styles.separator}></div>
      <HeaderMain />
      <HeaderNavigation />
    </div>
  );
};

export default Header;