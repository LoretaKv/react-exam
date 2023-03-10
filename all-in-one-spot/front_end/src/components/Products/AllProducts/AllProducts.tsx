import { Box, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  return (
    <Grid display="flex">
      <Link to="/cart">CART</Link>
      <Link to="/cosmetics">
        <Card
          sx={{
            width: 400,
            height: "480px",
            p: 3,
            border: "1px solid grey",
            margin: "40px",
          }}
        >
          <Box
            sx={{
              "& img": {
                width: "400px",
                height: "480px",
                minHeight: { xs: 300, md: 167, lg: "400px" },
              },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="Beuty Products"
            />
          </Box>
        </Card>
      </Link>
      <Card
        sx={{
          width: 400,
          height: "480px",
          p: 3,
          border: "1px solid grey",
          margin: "40px",
        }}
      >
        <Box
          sx={{
            "& img": {
              width: "400px",
              height: "480px",
              // maxHeight: { xs: 300, md: 167, lg: "400px" },
            },
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1612851206272-c5d0cf0d26b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="Beuty Products"
          />
        </Box>
      </Card>
    </Grid>
  );
};
