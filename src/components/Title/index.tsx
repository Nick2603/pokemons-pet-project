import { PropsWithChildren } from "react";
import PropTypes from "prop-types";

interface IProps {
  HTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * @param {string} HTag h1 - h6 tag to use for title
 * @param {React.ReactNode} children children ReactNode to show inside Title
 */

export function Title({ HTag, children }: PropsWithChildren<IProps>) {
  return <HTag>{children}</HTag>;
}

Title.propTypes = {
  HTag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node.isRequired,
};
