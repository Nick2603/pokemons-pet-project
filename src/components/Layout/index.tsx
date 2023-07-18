import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import { Footer } from "../Footer";
import styles from "./index.module.scss";

const libPropTypes = {
  children: PropTypes.node.isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @param {React.ReactNode} children children ReactNode to show inside Layout
 */

export const Layout: FC<TSPropsType> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = libPropTypes;
