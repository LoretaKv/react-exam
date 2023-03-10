import { useContext, useEffect, useState } from "react";

import axios from "axios";

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProductsContext } from "../ProductsContext";
import { Product } from "./CosmeticProduct";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cosmetics`)
      .then((res) =>
        dispatch({
          type: "setProducts",
          payload: { fetchedProducts: res.data },
        })
      )
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
              gap: 4,
              textAlign: "center",
            }}
          >
            {fetchedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
