import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import styles from "./index.module.scss";

const libPropTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @param {number} totalPages total number of pages
 * @param {number} currentPage number of current page
 * @param {function} onChange func to execute on page change
 */

export const Pagination: FC<TSPropsType> = ({
  totalPages,
  currentPage,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => {
          const isActive = pageNumber === currentPage;
          const action = () => {
            if (!isActive) {
              onChange(pageNumber);
            }
          };

          return isActive ? (
            <b className={styles.pointer} key={pageNumber} onClick={action}>
              {" "}
              {pageNumber}{" "}
            </b>
          ) : (
            <span className={styles.pointer} key={pageNumber} onClick={action}>
              {" "}
              {pageNumber}{" "}
            </span>
          );
        },
      )}
    </div>
  );
};

Pagination.propTypes = libPropTypes;
