import { Routes, Route } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import ProductsPage from "./../Products/ProductsPage";
import SingleProduct from "./../SingleProduct/SingleProduct";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import MyOrderPage from "./../MyOrder/MyOrderPage";
import CartPage from "./../Cart/CartPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/1" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myorders" element={<MyOrderPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Routing;