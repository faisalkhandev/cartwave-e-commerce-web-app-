import { Routes, Route } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import ProductsPage from "./../Products/ProductsPage";
import SingleProduct from "./../SingleProduct/SingleProduct";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import MyOrderPage from "./../MyOrder/MyOrderPage";
import CartPage from "./../Cart/CartPage";
import LogOut from "../Authentication/LogOut";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myorders" element={<MyOrderPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  );
};

export default Routing;
