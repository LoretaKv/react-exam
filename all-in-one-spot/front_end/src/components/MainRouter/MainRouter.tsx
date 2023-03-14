import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { UserNavigation } from "../Users/UserNavigation/UserNavigation";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { ProductsCategories } from "../Products/ProductsCategories/ProductsCategories";
import { NewUserRegister } from "../Users/NewUserRegister";
import { UserSignIn } from "../Users/UserSignIn";
import { NavContainer } from "../NavContainer/NavContainer";
import { Cart } from "../Cart";
import { SaleProducts } from "../Products/SaleProducts/SaleProducts";
import { ClothesProducts } from "../Products/ClothesProducts/ClothesProducts";
import { Footer } from "../Footer/Footer";
import { CosmeticProducts } from "../Products/CosmeticProducts";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavContainer />
      <Routes>
        <Route path="/user" element={<UserNavigation />} />
        <Route path="/register" element={<NewUserRegister />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/" element={<ProductsCategories />} />
        <Route path="/cosmetics" element={<CosmeticProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sale" element={<SaleProducts />} />
        <Route path="/clothes" element={<ClothesProducts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
