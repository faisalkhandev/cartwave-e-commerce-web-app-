import "./App.css";
import Login from "./components/Authentication/Login";
import CartPage from "./components/Cart/CartPage";
import HomePage from "./components/Home/HomePage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProduct /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <Login />
      </main>
    </div>
  );
}

export default App;
