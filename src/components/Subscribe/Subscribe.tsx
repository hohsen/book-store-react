import type { FC } from "react";

import styles from "./Subscribe.module.css";

export const Subscribe: FC = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <h2>Subscribe to Newsletter</h2>
        <p>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <form className={styles.subscribe__form}>
          <input className={styles.form_input} placeholder="Your email"></input>
          <button className={styles.form_btn}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};
