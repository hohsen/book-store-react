import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import styles from "./AppLayout.module.css";

export const AppLayout: FC = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};
