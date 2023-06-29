import { Box } from "@mui/material";
import PropTypes from "prop-types";

interface IProps {
  errorText: string;
};

/**
 * @param {string} errorText text of error to show
 */

export function Error({ errorText }: IProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "90vh" }}>
      {errorText}
    </Box>
  );
};

Error.propTypes = {
  errorText: PropTypes.string.isRequired,
};
