import { FC } from "react";

import arrowBackBig from "../../assets/icons/arrow-back.svg";
import arrowBackSmall from "../../assets/icons/arrow-back-small.svg";
import arrowNextSmall from "../../assets/icons/arrow-next-small.svg";
import styles from "./favorite.module.css";

export const Favorite: FC = () => {
  return (
    <div>
      <div>
        <button>
          <img src={arrowBackBig} alt="back" />
        </button>
        <h1 className={styles.title}>favorite</h1>
      </div>
      <div></div>
      <div>
        <h3>popular books</h3>
        <div>
          <button>
            <img src={arrowBackSmall} alt="back" />
          </button>
          <button>
            <img src={arrowNextSmall} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
