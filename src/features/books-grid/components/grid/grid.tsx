import { FC } from "react";

import styles from "./grid.module.css";

export const Grid: FC = () => {
  return (
    <div>
      <h1>New Releases Books</h1>
      <div className={styles.grid}>
        <div className={styles.book}>AAA</div>
        <div className={styles.book}>BBB</div>
        <div className={styles.book}>CCC</div>
        <div className={styles.book}>DDD</div>
        <div className={styles.book}>EEE</div>
        <div className={styles.book}>FFF</div>
      </div>
      <div className={styles.pages}>
        <button className="">Prev</button>
        <button className="">Next</button>
      </div>
    </div>
  );
};
