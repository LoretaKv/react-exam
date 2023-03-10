import Box from "@mui/material/Box";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import Typography from "@mui/material/Typography";

export const Header: FC = () => {
  return (
    <Box
      bgcolor="grey"
      component={"header"}
      textAlign="center"
      margin="0 auto"
      width="600px"
    >
      <Typography
        color="green"
        variant="h3"
        padding={2}
        fontWeight="300"
        fontSize="44px"
      >
        ALL- IN- ONE- SPOT
      </Typography>
    </Box>
  );
};
