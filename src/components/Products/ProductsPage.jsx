import "./ProductsPage.css";

import ProductSideBar from "./ProductSideBar";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductSideBar />

      <ProductsList />
    </section>
  );
};

export default ProductsPage;
