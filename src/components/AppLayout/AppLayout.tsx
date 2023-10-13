import type { FC } from "react";

import { Grid } from "../../features/books-grid/components/grid";
import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import { Subscribe } from "../Subscribe";
import styles from "./AppLayout.module.css";

export const AppLayout: FC = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Grid />
      <Subscribe />
      <AppFooter />
    </div>
  );
};
