import { FC } from "react";
import PropTypes, { InferProps } from "prop-types";
import styles from "./index.module.scss";

const libPropTypes = {
  ability: PropTypes.exact({
    ability: PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    is_hidden: PropTypes.bool.isRequired,
    slot: PropTypes.number.isRequired,
  }).isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @typedef {Object} Ability
 * @property {Object} ability - The details of the ability
 * @property {string} ability.name - The name of the ability
 * @property {string} ability.url - The URL of the ability
 * @property {boolean} is_hidden - Indicates if the ability is hidden
 * @property {number} slot - The slot number of the ability
 */

/**
 * @param {Ability} ability - The ability object
 */

export const AbilityItem: FC<TSPropsType> = ({ ability }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ability}>Ability: {ability.ability.name}</div>
      <div>Slot: {ability.slot}</div>
    </div>
  );
};

AbilityItem.propTypes = libPropTypes;
