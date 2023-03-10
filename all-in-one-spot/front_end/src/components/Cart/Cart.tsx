import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";

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
  // Todo: material-ui data grid

  return (
    <Box>
      <ul>
        {cartProducts.map((product) => (
          <Grid
            container
            justifyContent="space-between"
            bgcolor="beige"
            borderBottom="1px solid black"
            width="80%"
            mx="auto"
            padding="20px"
            component="li"
            sx={{ "&Typography": { fontSize: "20px" } }}
          >
            <Grid item xs={6}>
              <Typography>{product.name}</Typography>
            </Grid>

            <Grid item xs={3} display="flex" gap="20px">
              {/* {cartProducts ? ( */}
              <ProductActionButton
                // color="errror"
                title="+"
                type="addProduct"
                productId={product.id}
              />

              {/* ) : null} */}

              <Typography textAlign="center">{product.amount}</Typography>

              <ProductActionButton
                // color="error"
                title="-"
                type="removeProduct"
                productId={product.id}
              />
            </Grid>
            <Grid item xs={3}>
              {product.price ? (
                <Typography textAlign="right">
                  {curewncyFormat.format(product.price)}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        ))}
      </ul>
      <Box
        display="flex"
        mt="20px"
        justifyContent="center
      "
        alignItems="center"
      >
        <Typography>Total Price:&nbsp;</Typography>
        <Typography variant="h4" fontWeight="bold">
          {totalPrice ? curewncyFormat.format(totalPrice) : null}
        </Typography>
      </Box>
    </Box>
  );
};
