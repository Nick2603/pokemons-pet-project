import { useState, ChangeEvent, FC, KeyboardEvent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

interface IProps {
  placeholderText: string;
  onClick: (id: string) => void;
}

/**
 * @param {string} placeholderText text for input placeholder
 * @param {func} onClick function to execute on click event
 */

export const SearchInput: FC<IProps> = ({ placeholderText, onClick }) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      const sanitizedValue = value.trim().toLowerCase();
      onClick(sanitizedValue);
      setValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholderText}
        onKeyDown={handleKeyDown}
      />
      <button style={{ marginLeft: "3px" }} onClick={handleSubmit}>
        search
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
