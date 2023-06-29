import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

interface IProps {
  totalPages: number;
  currentPage: number;
  onChange: (pageNumber: number) => void;
};

/**
 * @param {number} totalPages total number of pages
 * @param {number} currentPage number of current page
 * @param {function} onChange func to execute on page change
 */

export function Pagination({ totalPages, currentPage, onChange }: IProps) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => {
          const isActive = pageNumber === currentPage;
          const action = () => {
            if (!isActive) {
              onChange(pageNumber);
            };
          };

          return isActive ? (
            <b className={styles.pointer} key={pageNumber} onClick={action}>
              {" "}{pageNumber}{" "}
            </b>
          ) : (
            <span className={styles.pointer} key={pageNumber} onClick={action}>
              {" "}{pageNumber}{" "}
            </span>
          )
        },
      )}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
