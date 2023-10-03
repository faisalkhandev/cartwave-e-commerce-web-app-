import { Routes, Route } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import ProductsPage from "./../Products/ProductsPage";
import SingleProduct from "./../SingleProduct/SingleProduct";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import MyOrderPage from "./../MyOrder/MyOrderPage";
import CartPage from "./../Cart/CartPage";
import LogOut from "../Authentication/LogOut";
import ProtectedRouting from "./ProtectedRouting";

// eslint-disable-next-line react/prop-types
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRouting />}>
        <Route path="/myorders" element={<MyOrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/logout" element={<LogOut />} />
      </Route>
    </Routes>
  );
};

export default Routing;
