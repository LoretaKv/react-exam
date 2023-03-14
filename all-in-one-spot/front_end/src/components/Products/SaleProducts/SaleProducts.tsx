import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProductsContext } from "../ProductsContext";
import { CartButton } from "../../Cart/CartButtonContainer";
import { SaleProduct } from "./SaleProduct";
import { UserNavigation } from "../../Users/UserNavigation/UserNavigation";

export const SaleProducts = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        if (isAuth) {
          dispatch({
            type: "setProducts",
            payload: { fetchedProducts: res.data },
          });
          return setIsLoggedIn(true);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <Box>
      {isLoggedIn ? (
        <Box>
          <CartButton />
          {isLoading ? (
            <h2>Loading products...</h2>
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
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: {
                    md: " 1fr 1fr 1fr 1fr 1fr",
                  },
                  gap: "20px",
                  textAlign: "center",
                }}
              >
                {fetchedProducts.map((product) => (
                  <SaleProduct key={product.id} product={product} />
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      ) : (
        <Box>
          <UserNavigation />
        </Box>
      )}
    </Box>
  );
};
