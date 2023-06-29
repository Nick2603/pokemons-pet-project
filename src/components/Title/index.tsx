import PropTypes from "prop-types";

interface IProps {
  Size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
};

/**
 * @param {string} Size h1 - h6 tag to use for title
 * @param {string} children title text
 */

export function Title({ Size, children }: IProps) {
  return <Size>{children}</Size>
};

Title.propTypes = {
  Size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.string.isRequired,
};
