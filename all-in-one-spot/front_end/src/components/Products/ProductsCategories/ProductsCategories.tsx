import { Box, Card, Grid, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartButton } from "../../Cart/CartButtonContainer";
import { theme } from "../../Header/HeaderTheme";

export const ProductsCategories = () => {
  return (
    <>
      <CartButton />
      <Grid container display="flex" textAlign="center" marginLeft="100px">
        <Card
          sx={{
            height: "550px",
            p: 3,
            border: "1px solid grey",
            margin: "40px",
            paddingBottom: "20px",
            paddingRight: "30px",

            maxWidth: { xs: 130, md: 400, lg: 1000 },
          }}
        >
          <Link to="/cosmetics">
            <Box
              sx={{
                "& img": {
                  width: "400px",
                  height: "480px",
                  maxWidth: { xs: 150, md: 400, lg: 1000 },
                },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Beuty Products"
              />
            </Box>
          </Link>

          <ThemeProvider theme={theme}>
            <Typography variant="h4">BEAUTY PRODUCTS</Typography>
          </ThemeProvider>
        </Card>

        <Card
          sx={{
            width: 400,
            height: "550px",
            p: 3,
            border: "1px solid grey",
            margin: "40px",
            paddingBottom: "20px",
          }}
        >
          <Link to="/clothes">
            <Box
              sx={{
                "& img": {
                  width: "400px",
                  height: "480px",

                  maxWidth: { xs: 170, md: 400, lg: 1000 },
                },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1612851206272-c5d0cf0d26b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Beuty Products"
              />
            </Box>
          </Link>

          <ThemeProvider theme={theme}>
            <Typography variant="h4">WARDROBE</Typography>
          </ThemeProvider>
        </Card>

        <Card
          sx={{
            width: 400,
            height: "550px",
            p: 3,
            border: "1px solid grey",
            margin: "40px",
            paddingBottom: "20px",
          }}
        >
          <Link to="/sale">
            <Box
              sx={{
                "& img": {
                  width: "400px",
                  height: "480px",
                  maxHeight: { xs: 500, md: 600, lg: 1000 },
                  maxWidth: { xs: 280, md: 400, lg: 1000 },
                },
              }}
            >
              <img src="https://images.unsplash.com/photo-1531303435785-3853ba035cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            </Box>
          </Link>

          <ThemeProvider theme={theme}>
            <Typography variant="h4">ONLY FOR MEMBERS</Typography>
          </ThemeProvider>
        </Card>
      </Grid>
    </>
  );
};
