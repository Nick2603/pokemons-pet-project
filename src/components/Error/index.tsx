import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import styles from "./index.module.scss";

const libPropTypes = {
  errorText: PropTypes.string.isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @param {string} errorText text of error to show
 */

export const Error: FC<TSPropsType> = ({ errorText }) => {
  return <div className={styles.wrapper}>{errorText}</div>;
};

Error.propTypes = libPropTypes;
