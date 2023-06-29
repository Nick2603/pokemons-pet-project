import { Box, CircularProgress } from "@mui/material";

export function Loader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <CircularProgress />
    </Box>
  );
};
