import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid margin="0, auto" textAlign="center">
      <Grid item xs={6}>
        <Link to="/signin">
          <Typography aria-label="home link" fontSize=" 20px">
            Sign In To Shop
          </Typography>
        </Link>
      </Grid>

      <Typography> Don`t have an acount yet? Please register:</Typography>
      <Grid item xs={6}>
        <Link to="/register">
          <Typography aria-label="home link" fontSize=" 20px">
            Register
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
