import { FC } from "react";

import arrowSmallPrev from "../../../../assets/icons/arrow-back-small.svg";
import arrowSmallNext from "../../../../assets/icons/arrow-next-small.svg";
import bookTest from "../../../../assets/icons/book-example.png";
import star from "../../../../assets/icons/star.svg";
import starActive from "../../../../assets/icons/star-active.svg";
import styles from "./grid.module.css";

export const Grid: FC = () => {
  return (
    <div>
      <h1>New Releases Books</h1>
      <div className={styles.grid}>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <img src={bookTest} alt=" " />
          </div>
          <div className={styles.book__info}>
            <h3>Mastering ROS for Robotics Programming</h3>
            <p>by Lentin Joseph, Apress 2018</p>
          </div>
          <div className={styles.book__bottom}>
            <h3>$31.38</h3>
            <div className={styles.rating}>
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={star} alt=" " />
            </div>
          </div>
        </div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
      </div>
      <div className={styles.pages}>
        <button className={styles.pages__btnPrev}>
          <img src={arrowSmallPrev} alt=" " />
          Prev
        </button>
        <div className={styles.pages__numbers}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>6</button>
        </div>
        <button className={styles.pages__btnNext}>
          Next
          <img src={arrowSmallNext} alt=" " />
        </button>
      </div>
    </div>
  );
};
