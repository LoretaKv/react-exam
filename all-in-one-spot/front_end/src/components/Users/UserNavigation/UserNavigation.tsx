import { Card, Grid, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../Header/HeaderTheme";

export const UserNavigation = () => {
  return (
    <Card
      sx={{
        textAlign: "center",
        margin: "0 auto",
        display: "grid",
        maxHeight: { xs: 700, md: 500, lg: 1000 },
        maxWidth: { xs: 350, md: 600, lg: 1200 },
      }}
    >
      <Grid>
        <Grid item xs={5}>
          <Link to="/signin">
            <ThemeProvider theme={theme}>
              <Typography marginY="20px" fontSize="30px">
                SIGN IN
              </Typography>
            </ThemeProvider>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <ThemeProvider theme={theme}>
            <Typography marginY="20px" fontSize="30px">
              Don`t have an account yet? Please register:
            </Typography>
          </ThemeProvider>
        </Grid>

        <Grid item xs={5}>
          <Link to="/register">
            <ThemeProvider theme={theme}>
              <Typography marginY="20px" fontSize="30px">
                REGISTER
              </Typography>
            </ThemeProvider>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};
