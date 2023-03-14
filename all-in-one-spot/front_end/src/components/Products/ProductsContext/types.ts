import { Dispatch } from "react";

export type TProduct = {
  id: number;
  name: string;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number | null;
    count: number | null;
  };
};

export type TCartProduct = TProduct & {
  amount: number;
};

export type TProductsContext = {
  fetchedProducts: Readonly<TProduct[]>;
  cartProducts: Readonly<TCartProduct[]>;
  dispatch: Dispatch<TProductsAction>;
};

export type TProductsAction = {
  type: "addProduct" | "removeProduct" | "setProducts";
  payload: {
    productId?: number;
    fetchedProducts?: TProduct[];
  };
};

export type TProductsState = {
  fetchedProducts: Readonly<TProduct[]>;
  cartProducts: Readonly<TCartProduct[]>;
};
