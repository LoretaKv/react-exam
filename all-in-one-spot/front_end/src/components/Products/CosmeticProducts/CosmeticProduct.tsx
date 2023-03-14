import { type FC, useContext } from "react";
import type { TproductProps } from "../ProductsCategories/types";
import { ProductsContext } from "../ProductsContext";
import { ProductActionButton } from "../ProductActionButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const CosmeticProduct: FC<TproductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductsContext);

  const curewncyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const cartProductAmount = (id: number) => {
    return cartProducts.find((product) => product.id === id)?.amount || 0;
  };

  const isProductInCart = cartProducts.some(
    (cartProduct) => cartProduct.id === product.id
  );

  return (
    <Grid container>
      <Card
        sx={{
          width: 300,
          height: 300,
          p: 3,
          maxHeight: { xs: 500, md: 500, lg: 1000 },
          maxWidth: { xs: 300, md: 700, lg: 1200 },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            maxHeight: "20px",
            color: "text.secondary",
            overflow: "hidden",
          }}
          variant="body2"
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            "& img": {
              objectFit: "contain",
              height: 200,
              maxWidth: 180,
              maxHeight: { xs: 233, md: 167 },
            },
          }}
        >
          <img alt={product.name || "Product image"} src={product.image} />
        </Box>

        <Typography> {curewncyFormat.format(product.price)}</Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          sx={{ "& button": { width: 30 } }}
        >
          {!isProductInCart ? (
            <ProductActionButton
              title="ADD"
              type="addProduct"
              productId={product.id}
            />
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              sx={{ "& button": { width: 30 } }}
            >
              <ProductActionButton
                title="+"
                type="addProduct"
                productId={product.id}
              />
              <Typography>{cartProductAmount(product.id)}</Typography>
              <ProductActionButton
                title="-"
                type="removeProduct"
                productId={product.id}
              />
            </Box>
          )}
        </Box>
      </Card>
    </Grid>
  );
};
