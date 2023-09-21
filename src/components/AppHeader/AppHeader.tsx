import type { FC } from "react";

import bookstore from "../../assets/icons/bookstore.svg";
import heart from "../../assets/icons/heart-black.svg";
import search from "../../assets/icons/search.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import user from "../../assets/icons/user.svg";
import styles from "./AppHeader.module.css";

export const AppHeader: FC = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <a className={styles.header__logo} data-action-id="home">
          <img src={bookstore} alt="BOOKSTORE" />
        </a>
        <form className={styles.header__search}>
          <input type="text" id="search-input" name="" placeholder="Search" />
          <button>
            <img src={search} alt="search" />
          </button>
        </form>
        <div className={styles.header__actions}>
          <a data-action-id="favorites" className={styles.icon}>
            <img src={heart} alt="favorite" />
          </a>
          <a data-action-id="cart" className={styles.icon}>
            <img src={shoppingBag} alt="cart" />
          </a>
          <a data-action-id="profile" className={styles.icon}>
            <img src={user} alt="user" />
          </a>
        </div>
      </div>
    </header>
  );
};
