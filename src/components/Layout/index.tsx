import PropTypes from "prop-types";
import { Footer } from "../Footer";
import styles from "./Layout.module.scss";

interface IProps {
  children: React.ReactNode;
};

/**
 * @param {React.ReactNode} children ReactNode to show inside Layout
 */

export function Layout({ children }: IProps) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>{children}</main>
      <Footer/>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
