import { useEffect, useState } from "react";
import Links from "../Navbar/Links";
import "./ProductSideBar.css";
import apiClient from "../utils/api-client";

const ProductSideBar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <aside className="products_sidebar">
      <h2>Categories</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}

        {categories.map((category) => (
          <Links
            key={category._id}
            sidebar={true}
            title={category.name}
            link={`product?category=${category.name}`}
            image={`http://localhost:5000/category/${category.image}`}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductSideBar;
