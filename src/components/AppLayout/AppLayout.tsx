import type { FC } from "react";

import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import { Subscribe } from "../Subscribe";
import styles from "./AppLayout.module.css";

export const AppLayout: FC = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Subscribe />
      <AppFooter />
    </div>
  );
};
