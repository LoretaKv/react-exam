import { Card, Grid, Box, Typography, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { theme } from "../Header/HeaderTheme";
import { ProductActionButton } from "../Products/ProductActionButton";
import { ProductsContext } from "../Products/ProductsContext";

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);

  const curewncyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      curPrice + (cartProduct.price || 0) * cartProduct.amount,
    0
  );

  return (
    <Card sx={{ width: "60%", margin: "0 auto" }}>
      {!totalPrice ? (
        <ThemeProvider theme={theme}>
          <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
            Your Cart Is Empty
          </Typography>
        </ThemeProvider>
      ) : (
        <Box>
          <ul>
            {cartProducts.map((product) => (
              <Grid
                container
                justifyContent="space-around"
                borderBottom="1px solid #ccc"
                width="80%"
                mx="auto"
                component="li"
                sx={{ "&Typography": { fontSize: "20px" } }}
                padding="20px"
              >
                <Grid item xs={2}>
                  <Typography>{product.title || product.name}</Typography>
                </Grid>

                <Grid
                  item
                  xs={2}
                  sx={{
                    "& img": {
                      height: 50,
                      maxWidth: 180,
                      maxHeight: { xs: 233, md: 100 },
                    },
                  }}
                >
                  <img
                    alt={product.name || "Product image"}
                    src={product.image}
                  />
                </Grid>

                <Grid item xs={2} display="flex" gap="20px">
                  <ProductActionButton
                    title="+"
                    type="addProduct"
                    productId={product.id}
                  />

                  <Grid item xs={1} display="flex" gap="20px">
                    <Typography textAlign="center">{product.amount}</Typography>
                  </Grid>

                  <ProductActionButton
                    title="-"
                    type="removeProduct"
                    productId={product.id}
                  />
                </Grid>

                <Grid container item xs={2}>
                  {product.price ? (
                    <Typography textAlign="right" marginLeft={2}>
                      {curewncyFormat.format(product.price)}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            ))}
          </ul>

          <Grid
            container
            display="grid"
            mt="20px"
            justifyContent="center"
            textAlign="center"
          >
            <Typography>Total Price:&nbsp;</Typography>
            <Typography variant="h4" fontWeight="bold">
              {totalPrice ? curewncyFormat.format(totalPrice) : null}
            </Typography>
            <Box textAlign="center" padding="10px">
              <ProductActionButton title="BUY" type="addProduct" />
            </Box>
          </Grid>
        </Box>
      )}
    </Card>
  );
};
