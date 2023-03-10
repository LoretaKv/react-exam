import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { ProductsContext } from "./ProductsContext";

import { TProductActionButtonProps } from "./types";

export const ProductActionButton: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
}) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <Button
      sx={{ width: 30, height: 30 }}
      color="primary"
      variant="contained"
      size="small"
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
