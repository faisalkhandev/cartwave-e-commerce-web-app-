import "./FeatureProducts.css";
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
  return (
    <section className="feature_product">
      <h2>Feature Product</h2>
      <div className="align_center feature_product_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeatureProducts;
