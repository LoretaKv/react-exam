import { useReducer } from "react";
import { MainRouter } from "./components/MainRouter/MainRouter";
import {
  ProductsContext,
  productsReducer,
} from "./components/Products/ProductsContext";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <div>
      <ProductsContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductsContext.Provider>
    </div>
  );
};
