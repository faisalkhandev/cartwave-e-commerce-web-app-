import useData from "../Hooks/useData";
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
              link={`/product?category=${category.name}`}
              image={`http://localhost:5000/category/${category.image}`}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductSideBar;
