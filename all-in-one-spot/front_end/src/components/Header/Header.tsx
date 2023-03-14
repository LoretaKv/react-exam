import Box from "@mui/material/Box";
import type { FC } from "react";
import Typography from "@mui/material/Typography";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "./HeaderTheme";

export const Header: FC = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "max-content",
        borderShadow: "200px",
        marginTop: "40px",
        maxHeight: { xs: 230, md: 250, lg: 1000 },
        maxWidth: { xs: 250, md: 800, lg: 1200 },
      }}
      borderRadius={14}
      display={"grid"}
      component={"header"}
      textAlign="center"
      margin="0 auto"
      width="90%"
    >
      <ThemeProvider theme={theme}>
        <Typography
          color="white"
          variant="h2"
          padding={2}
          fontWeight="responsive"
          sx={{
            minheight: { xs: 230, md: 250, lg: 1000 },
            maxHeight: { xs: 250, md: 250, lg: 1000 },
            maxWidth: { xs: 250, md: 800, lg: 1200 },
          }}
        >
          ALL In ONE SPOT
        </Typography>
      </ThemeProvider>
      ;
    </Grid>
  );
};
