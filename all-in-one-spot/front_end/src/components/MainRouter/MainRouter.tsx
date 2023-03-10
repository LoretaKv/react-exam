import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { AllProducts } from "../Products/AllProducts/AllProducts";
import { Products } from "../Products/CosmeticProducts/CosmeticProducts";

import { NewUserRegister } from "../Users/NewUserRegister";
import { SignIn } from "../Users/SignIn";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/register" element={<NewUserRegister />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/cosmetics" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
