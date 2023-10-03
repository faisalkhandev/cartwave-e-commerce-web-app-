import useData from "../Hooks/useData";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";
import "./FeatureProducts.css";
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
  const skeletonArr = [1, 2, 3];
  const { data, error, isLoading } = useData("/products/featured");

  return (
    <section className="feature_product">
      <h2>Feature Product</h2>
      <div className="align_center feature_product_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading
          ? skeletonArr.map((n) => <ProductCardSkeleton key={n} />)
          : data &&
            data.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                product={product}
              />
            ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
