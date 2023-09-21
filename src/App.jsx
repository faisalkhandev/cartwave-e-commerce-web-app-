import "./App.css";
import HomePage from "./components/Home/HomePage";
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
        <SingleProduct />
      </main>
    </div>
  );
}

export default App;
