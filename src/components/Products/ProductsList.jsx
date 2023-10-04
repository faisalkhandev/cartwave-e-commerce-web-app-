import "./ProductsList.css";

import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./../Home/ProductCard";
import useData from "../Hooks/useData";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Common/Pagination";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const [sortBy, setSortBy] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const category = search.get("category");
  const page = search.get("page");
  const searchQuery = search.get("search");
  // console.log(searchQuery);

  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        search: searchQuery,
        category: category,
        page: page,
      },
    },
    [searchQuery, category, page]
  );

  function handlePagination(page) {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  }

  useEffect(() => {}, [searchQuery]);

  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (data && data.products) {
      const products = [...data.products];
      console.log("newWalaProduct de ", products);
      if (sortBy === "price desc") {
        setSortedProducts(products.sort((a, b) => b.price - a.price));
        console.log("desc ki yam ");
      } else if (sortBy === "price asc") {
        setSortedProducts(products.sort((a, b) => a.price - b.price));
      } else if (sortBy === "rate desc") {
        setSortedProducts(
          products.sort((a, b) => b.reviews.rate - a.reviews.rate)
        );
      } else if (sortBy === "rate asc") {
        setSortedProducts(
          products.sort((a, b) => a.reviews.rate - b.reviews.rate)
        );
      } else {
        setSortedProducts(products);
      }
    }
  }, [sortBy, data]);

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select
          name="sort"
          id=""
          className="products_sorting"
          onChange={(e) => setSortBy(e.target.value)}
        >
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
            sortedProducts.map((product) => (
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
