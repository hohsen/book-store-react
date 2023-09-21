import type { FC } from "react";

import styles from "./AppFooter.module.css";

export const AppFooter: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <span>©2022 Bookstore</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </div>
  );
};
