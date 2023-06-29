import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import styles from "./Item.module.scss";

interface IProps {
  url: string;
  name: string;
};

/**
 * @param {string} url url for pokemon details page
 * @param {string} name name of pokemon
 */

export function Item({ url, name }: IProps) {
  const id = getIdFromUrl(url);

  return <Link className={styles.link} to={`pokemon/${id}`}><div className={styles.wrapper}>{name}</div></Link>
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
