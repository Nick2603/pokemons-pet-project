import { FC } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./index.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress />
    </div>
  );
};
