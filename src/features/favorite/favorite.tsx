import { FC } from "react";
import { Link } from "react-router-dom";

import arrowBackBig from "../../assets/icons/arrow-back.svg";
import arrowBackSmall from "../../assets/icons/arrow-back-small.svg";
import arrowNextSmall from "../../assets/icons/arrow-next-small.svg";
import styles from "./favorite.module.css";

export const Favorite: FC = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={arrowBackBig} alt="Go back" />
        </Link>
        <h1 className={styles.title}>favorite</h1>
      </div>
      <div className={styles.favoriteBooks}>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className={styles.popularBooks}>
        <div className={styles.popularBooks__header}>
          <h3>popular books</h3>
          <div className={styles.popularBooks__header_nav}>
            <Link to="">
              <img src={arrowBackSmall} alt="back" />
            </Link>
            <Link to="">
              <img src={arrowNextSmall} alt="next" />
            </Link>
          </div>
        </div>
        <div className={styles.popularBooks__books}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
