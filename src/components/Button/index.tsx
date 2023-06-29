import PropTypes from "prop-types";
import styles from "./Button.module.scss"

interface IProps {
  children: string;
  onClick: () => void;
};

/**
 * @param {string} children text to show inside button
 * @param {function} onClick func to execute on button click
 */

export function Button({ children, onClick }: IProps) {
  return <button className={styles.button} onClick={onClick} >{children}</button>
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
