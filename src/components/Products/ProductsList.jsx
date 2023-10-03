import "./ProductsList.css";

import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./../Home/ProductCard";
import useData from "../Hooks/useData";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category: category,
        page: page,
      },
    },
    [category, page]
  );

  function handlePagination(page) {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  }

  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading
          ? skeletonArr.map((n) => <ProductCardSkeleton key={n} />)
          : data?.products &&
            data.products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                product={product}
              />
            ))}
      </div>
      <Pagination
        totalPosts={data?.totalProducts}
        postPerPage={8}
        click={handlePagination}
        currentPage={page}
      />
    </section>
  );
};
export default ProductsList;
