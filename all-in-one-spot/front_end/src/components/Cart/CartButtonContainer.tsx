import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Card } from "@mui/material";
import { useContext } from "react";
import { ProductsContext } from "../Products/ProductsContext";
import Typography from "@mui/material/Typography";
import { theme } from "../Header/HeaderTheme";
import { ThemeProvider } from "@mui/material/styles";

export const CartButton = () => {
  const { cartProducts } = useContext(ProductsContext);

  return (
    <Box
      component="aside"
      mr={15}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      marginRight="200px"
    >
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            backgroundColor: "rgb(225, 229, 226)",
            marginBottom: "5px",
            marginLeft: "300px",
          }}
        >
          <Typography padding="3px" variant="h3" color="Grey">
            GET 20% OFF WITH THE CODE "SPRING"
          </Typography>
          <Card sx={{ width: "200px" }}></Card>
        </Card>
      </ThemeProvider>
      <Link to="/cart">
        <ThemeProvider theme={theme}>
          <Typography
            sx={{
              color: "white",
              paddingTop: "6px",
              fontSize: "20px",
              fontWeight: "bold",
              variant: "h3",
              position: "absolute",
              paddingLeft: "325px",
            }}
          >
            {cartProducts.length}
          </Typography>
        </ThemeProvider>

        <ShoppingCartOutlinedIcon
          sx={{
            "&:hover": {
              backgroundColor: "green",
              opacity: [0.9, 0.8, 0.7],
            },
            backgroundImage: `url(https://images.pexels.com/photos/2622170/pexels-photo-2622170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            padding: "10px",
            marginTop: "10px",
            color: "#bdbdbd",
            width: "50px",
            height: "50px",
            border: "2px solid black",
            borderRadius: "50%",
            marginLeft: "300px",
          }}
          fontSize="large"
        />
      </Link>
    </Box>
  );
};
