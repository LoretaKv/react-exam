import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProductsContext } from "../ProductsContext";
import { ClothesProduct } from "./ClothesProduct";
import { CartButton } from "../../Cart/CartButtonContainer";

export const ClothesProducts = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/clothes`)
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
    <Box>
      <CartButton />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              p: 2,

              display: "grid",
              gridTemplateColumns: {
                md: " 1fr 1fr 1fr 1fr 1fr",
              },
              gap: "20px",
              textAlign: "center",
            }}
          >
            {fetchedProducts.map((product) => (
              <ClothesProduct key={product.id} product={product} />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
