import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import styles from "./index.module.scss";

const libPropTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @param {string} url url for item details page
 * @param {string} name name of item
 * @param {string} to link for navigation
 */

export const Item: FC<TSPropsType> = ({ url, name, to }) => {
  const id = getIdFromUrl(url);

  return (
    <Link className={styles.link} to={`/${to}/${id}`}>
      <div className={styles.wrapper}>{name}</div>
    </Link>
  );
};

Item.propTypes = libPropTypes;
