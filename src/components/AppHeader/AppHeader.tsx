import type { FC } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" className={styles.header__logo} data-action-id="home">
          <img src={bookstore} alt="BOOKSTORE" />
        </Link>
        <form className={styles.header__search}>
          <input type="text" id="search-input" name="" placeholder="Search" />
          <button>
            <img src={search} alt="search" />
          </button>
        </form>
        <div className={styles.header__actions}>
          <Link
            to="/favorites"
            data-action-id="favorites"
            className={styles.icon}
          >
            <img src={heart} alt="favorite" />
          </Link>
          <Link to="cart" data-action-id="cart" className={styles.icon}>
            <img src={shoppingBag} alt="cart" />
          </Link>
          <Link to="login" data-action-id="profile" className={styles.icon}>
            <img src={user} alt="user" />
          </Link>
        </div>
      </div>
    </header>
  );
};
