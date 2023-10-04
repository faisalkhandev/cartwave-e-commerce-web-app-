import useData from "../Hooks/useData";
import confiq from "../../config.json";
import Links from "../Navbar/Links";
import "./ProductSideBar.css";

const ProductSideBar = () => {
  const { data: categories, error } = useData("/category");

  return (
    <aside className="products_sidebar">
      <h2>Categories</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}

        {categories &&
          categories.map((category) => (
            <Links
              key={category._id}
              sidebar={true}
              title={category.name}
              link={`/products?category=${category.name}`}
              image={`${confiq.backendURL}/category/${category.image}`}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductSideBar;
